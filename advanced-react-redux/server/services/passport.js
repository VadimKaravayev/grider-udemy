const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false);

      // compare passwords
      user.comparePasswords(password, (err, isMatch) => {
        if (err) return done(err);
        return done(null, isMatch && user);
      });
    } catch (err) {
      return done(err);
    }
  }
);

// Create options of JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // See if the user ID in the payload iexists in our database
  // If it does, call 'done' with that other
  // otherwise , call done without a suer object
  try {
    const user = await User.findById(payload.sub).exec();
    done(null, user || false);
  } catch (err) {
    return done(err, false);
  }
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);

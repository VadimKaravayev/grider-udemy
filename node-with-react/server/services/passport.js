const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientId,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const record = { googleId: profile.id };

      const foundUser = await User.findOne(record);
      if (foundUser) {
        return done(null, foundUser);
      }
      const user = await new User(record).save();
      done(null, user);
    }
  )
);

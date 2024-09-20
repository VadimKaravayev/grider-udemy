"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
    }
    res.status(403);
    res.send('Not permitted');
}
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to the protected resource');
});
router.get('/', function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("<div>\n      <div>You are loggined</div>\n      <a href=\"logout\">Logout</a>\n    </div>");
    }
    else {
        res.send("\n      <div>You are logged out</div>\n    ");
    }
});
// router.get('/login', (req: Request, res: Response) => {
//   res.send(`<form action="" method="POST">
//   <div>
//     <label for="">Email</label>
//     <input type="email" name="email">
//   </div>
//   <div>
//     <label for="">Password</label>
//     <input type="password" name="password">
//   </div>
//   <button>Submit</button>
// </form>`);
// });
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if ('admin@admin.com' === email && 'admin' === password) {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Wrong credentials');
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});

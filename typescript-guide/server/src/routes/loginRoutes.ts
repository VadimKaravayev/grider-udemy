import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

// function requireAuth(req: Request, res: Response, next: NextFunction) {
//   if (req.session?.loggedIn) {
//     next();
//   }
//   res.status(403);
//   res.send('Not permitted');
// }

// router.get('/protected', requireAuth, (req: Request, res: Response) => {
//   res.send('Welcome to the protected resource');
// });

// router.get('/', (req: Request, res: Response) => {
//   if (req.session?.loggedIn) {
//     res.send(`<div>
//       <div>You are loggined</div>
//       <a href="logout">Logout</a>
//     </div>`);
//   } else {
//     res.send(`
//       <div>You are logged out</div>
//     `);
//   }
// });

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

// router.post('/login', (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if ('admin@admin.com' === email && 'admin' === password) {
//     req.session = { loggedIn: true };
//     res.redirect('/');
//   } else {
//     res.send('Wrong credentials');
//   }
// });

// router.get('/logout', (req: Request, res: Response) => {
//   req.session = undefined;
//   res.redirect('/');
// });

export { router };

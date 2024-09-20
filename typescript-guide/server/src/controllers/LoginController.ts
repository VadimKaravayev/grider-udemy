import { Request, Response, NextFunction } from 'express';
import { get, post, controller, use, bodyValidator } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`<form action="" method="POST">
    <div>
      <label for="">Email</label>
      <input type="email" name="email">
    </div>
    <div>
      <label for="">Password</label>
      <input type="password" name="password">
    </div>
    <button>Submit</button>
  </form>`);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if ('admin@admin.com' === email && 'admin' === password) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Wrong credentials');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}

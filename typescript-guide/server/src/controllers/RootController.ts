import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
  }
  res.status(403);
  res.send('Not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`<div>
        <div>You are loggined</div>
        <a href="/auth/logout">Logout</a>
      </div>`);
    } else {
      res.send(`
        <div>You are logged out</div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to the protected resource');
  }
}

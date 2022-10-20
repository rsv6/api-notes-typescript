import { Router } from "express";
import { usuarioController } from "../controllers/UsuarioController";

export class Routes {
  public router: Router = Router()

  start () {
    return this.router
      .all('/')
        .get('/', usuarioController.home)
  }
  
}
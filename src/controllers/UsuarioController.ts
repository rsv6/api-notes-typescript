import { Request, Response } from "express";

class UsuarioController{

  public home(req: Request, res: Response) {

    console.log("Route /");

    return res.json({
      response: 'Hello World'
    });
  }
}

export const usuarioController = new UsuarioController();
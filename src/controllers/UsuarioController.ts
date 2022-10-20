import { Request, Response } from "express";
import { UsuarioModel } from "../models/UsuarioModel";

class UsuarioController{

  public home(req: Request, res: Response) {

    console.log("Route /");

    return res.json({
      response: 'Ola seja bem vindo',
      usuario: new UsuarioModel(
        "Rafael",
        "rsv6",
        "12345"
      )
    
    });
  }
}

export const usuarioController = new UsuarioController();
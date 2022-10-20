import express from "express";
import { Routes } from "../routes/Router";
import cors, { CorsRequest } from 'cors';

export class App{
  public server: express.Application;
  public router: Routes = new Routes();
  private cors = cors();

  constructor(){
    this.server = express();

    this.middleware();
    this.routes();
    this.start();
  }

  private middleware(){
    this.server.use(this.cors);
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
  }

  private routes(){
    this.server.use(this.router.start());
  }

  private start(){
    this.server.listen(8080, () => {
      console.log("listening on port 8080")
    });
  }
}
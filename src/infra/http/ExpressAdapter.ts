import express, { Request, Response } from "express";
import compression from "compression";
import Http from "./Http";
import cors from "cors";


export default class ExpressAdapter implements Http {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(compression());
        this.app.use(cors());
    }
    
    route(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response){
            const output = await callback(req.params, req.body)
            res.json(output);
        })
    }
    listen(port: number): void {
        this.app.listen(port);
    }
    
}
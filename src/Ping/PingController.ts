import {Controller, Get, Route,} from "tsoa";
import {PingResponse} from "./Models/PingResponse";

@Route("system")
export class PingController extends Controller {
    @Get("ping")
    public async getUser(): Promise<PingResponse> {
        return {
            message: `success`
        } ;
    }
}
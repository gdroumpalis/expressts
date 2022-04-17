import {Controller, Get, Route,} from "tsoa";

@Route("system")
export class UsersController extends Controller {
    @Get("ping")
    public async getUser() {
        return "ping";
    }
}
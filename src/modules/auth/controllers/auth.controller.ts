import {Controller, Request, Post, UseGuards} from '@nestjs/common';
import { AuthService } from "../services/auth-service";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log(req.admin);
        return 555;
    }
}

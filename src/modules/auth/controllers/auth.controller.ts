import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthService } from "../services/auth-service";
import { AuthGuard } from "@nestjs/passport";
import {AdminRepositoryService} from "../../admin/services/admin-repository.service";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private adminRepository: AdminRepositoryService,
    ) {}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('refresh')
    async refresh(@Request() req) {
        const admin = await this.adminRepository.find(req.user.id);
        return this.authService.login(admin);
    }
}

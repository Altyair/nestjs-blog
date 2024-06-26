import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthService } from "../services/auth-service";
import { AuthGuard } from "@nestjs/passport";
import { Connection, Repository } from "typeorm";
import { Admin } from "../../admin/models/admin.entity";

@Controller('auth')
export class AuthController {
    private adminRepository: Repository<Admin>;
    constructor(
        private authService: AuthService,
        private connection: Connection
    ) {
        this.adminRepository = this.connection.getRepository(Admin);
    }
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
        const admin = await this.adminRepository.findOne(req.user.id);
        return this.authService.login(admin);
    }
}

import { Module } from '@nestjs/common';
import { AdminModule } from "../admin/admin.module";
import { AuthService } from "./services/auth-service";
import { LocalStrategyService } from "./services/local-strategy.service";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./controllers/auth.controller";

@Module({
    providers: [AuthService, LocalStrategyService],
    imports: [AdminModule, PassportModule],
    controllers: [AuthController]
})
export class AuthModule {}

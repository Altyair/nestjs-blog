import { Module } from '@nestjs/common';
import { AdminModule } from "../admin/admin.module";
import { AuthService } from "./services/auth-service";
import { LocalStrategyService } from "./services/local-strategy.service";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./controllers/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {config} from "rxjs";
import {JwtStrategyService} from "./services/jwt-strategy.service";

@Module({
    providers: [
        AuthService,
        LocalStrategyService,
        JwtStrategyService,
    ],
    imports: [
        AdminModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') }
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [AuthController]
})
export class AuthModule {}

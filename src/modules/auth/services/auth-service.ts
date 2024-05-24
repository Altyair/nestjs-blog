import { AdminRepositoryService } from "../../admin/services/admin-repository.service";
import { Admin } from "../../admin/models/admin.entity";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private adminRepository: AdminRepositoryService, private jwtService: JwtService) {}

    async validateAdmin(login: string, pass: string): Promise<Admin | null> {
        const admin: Admin = await this.adminRepository.findByLogin(login);

        if (admin && admin.passwordHash === pass) {
            const { passwordHash, ...secureAdmin } = admin;
            return secureAdmin;
        }
        return null;
    }

    async login(admin: Admin) {
        const payload = { id: admin.id };

        return { accessToken: this.jwtService.sign(payload) }
    }
}

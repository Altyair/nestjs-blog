import { AdminRepositoryService } from "../../admin/services/admin-repository.service";
import { AdminModel } from "../../admin/models/admin.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(private adminRepository: AdminRepositoryService) {}

    async validateAdmin(login: string, pass: string): Promise<AdminModel | null> {
        const admin: AdminModel = await this.adminRepository.findByLogin(login);

        if (admin && admin.password === pass) {
            const { password, ...secureAdmin } = admin;
            return secureAdmin;
        }
        return null;
    }
}

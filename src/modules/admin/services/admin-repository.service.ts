import { Injectable } from '@nestjs/common';
import { Admin } from "../models/admin.entity";

@Injectable()
export class AdminRepositoryService {
    private readonly admins: Admin[];

    constructor() {
        this.admins = [];
    }

    async find(id: number): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.id === id);
    }

    async findByLogin(login: string): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.login === login);
    }
}

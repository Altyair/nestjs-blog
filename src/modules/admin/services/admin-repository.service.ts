import { Injectable } from '@nestjs/common';
import { AdminModel } from "../models/admin.model";

@Injectable()
export class AdminRepositoryService {
    private readonly admins: AdminModel[];

    constructor() {
        this.admins = [
            {
                id: '1',
                login: 'damir',
                password: '123'
            }
        ];
    }


    async findByLogin(login: string): Promise<AdminModel | undefined> {
        return this.admins.find(admin => admin.login === login);
    }
}

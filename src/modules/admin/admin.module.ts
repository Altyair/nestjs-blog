import { Module } from '@nestjs/common';
import { AdminRepositoryService } from "./services/admin-repository.service";

@Module({
    providers: [AdminRepositoryService],
    exports: [AdminRepositoryService]
})
export class AdminModule {}

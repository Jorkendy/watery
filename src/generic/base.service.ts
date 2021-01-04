import { BaseEntity, DeleteResult, Repository } from "typeorm";
import { BaseServiceInterface } from "./base.service.interface";
import { EntityId } from "typeorm/repository/EntityId";
import { LoggerService } from "../logger/custom.logger";

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements BaseServiceInterface<T> {
  protected readonly repository: R;
  protected readonly logger: LoggerService;

  constructor(repository: R, logger: LoggerService) {
    this.repository = repository;
    this.logger = logger;
  }

  findAll(data: any): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: EntityId): Promise<T> {
    return this.repository.findOne(id);
  }

  create(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: EntityId, data: any): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}

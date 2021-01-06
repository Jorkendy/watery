import { EntityId } from "typeorm/repository/EntityId";
import { DeleteResult } from "typeorm";

export interface BaseServiceInterface<T> {
  create(data: any): Promise<T>;

  findAll(data: any): Promise<T[]>;

  update(id: EntityId, data: any): Promise<T>;

  delete(id: EntityId): Promise<DeleteResult>;

  findById(id: EntityId): Promise<T>;
}

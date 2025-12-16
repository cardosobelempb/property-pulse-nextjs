import { IPagination } from "@/shared/infrastructure";

export abstract class RepositoryAbstract<T> {
  abstract findById(id: string): Promise<T | null>;
  abstract findAll(params: IPagination): Promise<T[]>;
  abstract create(entity: T): Promise<void>;
  abstract insert(entity: T): Promise<T>;
  abstract edit(id: string, entity: T): Promise<T>;
  abstract update(entity: T): Promise<void>;
  abstract destroy(id: string, entity: T): Promise<void>;
  abstract delete(entity: T): Promise<void>;
}

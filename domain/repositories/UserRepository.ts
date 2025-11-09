import { UserEntity } from "@/domain/entities/UserEntity";
import { RepositoryAbstract } from "@/shared/domain/common/abstract/repository.abstract";

export abstract class UserRepository extends RepositoryAbstract<UserEntity> {
  abstract findByEmail(email: string): Promise<UserEntity | null>;
}

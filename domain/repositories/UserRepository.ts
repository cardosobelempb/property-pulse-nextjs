import { UserEntity } from "@/domain/entities/User";
import { RepositoryAbstract } from "@/shared/domain/common/abstract/RepositoryAbstract";

export abstract class UserRepository extends RepositoryAbstract<UserEntity> {
  abstract findByEmail(email: string): Promise<UserEntity | null>;
}

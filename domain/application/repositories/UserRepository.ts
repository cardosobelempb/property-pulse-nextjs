import { User } from "@/domain/entities/User";
import { RepositoryAbstract } from "@/shared/domain/common/abstract/RepositoryAbstract";

export abstract class UserRepository extends RepositoryAbstract<User> {
  abstract findByEmail(email: string): Promise<User | null>;
}

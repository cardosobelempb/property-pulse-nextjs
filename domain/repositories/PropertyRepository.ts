import { PropertyEntity } from "@/domain/entities/Property";
import { RepositoryAbstract } from "@/shared/domain/common/abstract/RepositoryAbstract";

export abstract class PropertyRepository extends RepositoryAbstract<PropertyEntity> {}

// infra/mappers/RateMapper.ts
import { Prisma, Rate as RatePrisma } from "@/app/generated/prisma";
import { Rate } from "@/domain/entities/Rate";

import { UUIDVO } from "@/shared";

export class RateMapper {
  static toDomain(raw: RatePrisma): Rate {
    return Rate.create(
      {
        nightly: raw.nightly ?? 0,
        monthly: raw.monthly ?? 0,
        weekly: raw.weekly ?? 0,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Rate): Prisma.RateUncheckedCreateInput {
    return {
      nightly: entity.nightly,
      monthly: entity.monthly,
      weekly: entity.weekly,
    };
  }
}

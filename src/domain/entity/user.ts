import { Entity } from "@/domain/entity/entity";
import { UserType } from "@/domain/enum/user-type";
import { EntityType } from "@/domain/types/entity-type";
import { OptionalType } from "@/domain/types/optional-type";

type Constructor = OptionalType<EntityType<User>, 'id' | 'createdAt'>;

export class User extends Entity {
  type: UserType;

  constructor(props: Constructor){
    super();
    Object.assign(this, props);
  }

  /**
   * @param [daysToExpire=3] - Number to sum for expiry that user
   * @returns - Final date to expiry visitors    
   */
  expireAt(daysToExpire: number = 3): Date | undefined {
    const expireDate = this.createdAt;
    expireDate.setDate(expireDate.getDate() + daysToExpire);
    return expireDate;
  }
}
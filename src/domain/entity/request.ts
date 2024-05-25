import { Entity } from "@/domain/entity/entity";
import { EntityType } from "@/domain/types/entity-type";
import { OptionalType } from "@/domain/types/optional-type";

type Constructor = OptionalType<EntityType<Request>, 'id' | 'createdAt'>;

export class Request extends Entity {
  host: string;
  method: string;
  header: object;
  contentType: string;
  contentLength: number;
  queryParams?: object;
  body?: object | string;

  constructor(props?: Constructor){
    super();
    Object.assign(this, props);
  }
}
import { Entity } from "@/domain/entity/entity";
import { EntityType } from "@/domain/types/entity-type";
import { OptionalType } from "@/domain/types/optional-type";

type Constructor = OptionalType<EntityType<Response>, 'id' | 'createdAt'>;

export class Response extends Entity {
  headers?: object;
  content?: string = 'No content';
  statusCode?: number = 200;
  contentType?: string = 'text/html';
  isFile?: boolean = false;
  filename?: string;

  constructor(props?: Constructor){
    super();
    Object.assign(this, props);
  }
}
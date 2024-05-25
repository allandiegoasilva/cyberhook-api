import { Entity } from "@/domain/entity/entity";
import { EntityType } from "@/domain/types/entity-type";
import { OptionalType } from "@/domain/types/optional-type";

type Constructor = OptionalType<EntityType<URI>, 'id' | 'createdAt'>;

export class URI extends Entity {
  private limitPathCaracters: number = 7;
  private _uniquePath: string;

  constructor(props?: Constructor){
    super();
    Object.assign(this, props);
  }

  set uniquePath(input: string){
    this._uniquePath = input.slice(0,this.limitPathCaracters);
  }

  get uniquePath(){
    return this._uniquePath;
  }

  generateUniquePath(): string {
    const characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let path: string = '';

    for (let i = 0; i < this.limitPathCaracters; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      path += characters[randomIndex];
    }

    return path;
  }
}
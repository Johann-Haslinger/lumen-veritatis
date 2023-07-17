import { IterativeSystem, QueryPredicate, Entity, EntitySnapshot } from "@leanscope/ecs-engine";


export class RenderSystem extends IterativeSystem {
  private shouldUpdate = true;
  public constructor(
    protected emoji: string,
    queryPredicate: QueryPredicate,
    public shouldUpdateCallback?: (dt: number) => void,
  ) {
    super(queryPredicate);
  }

  protected updateEntity(_entity: Entity, _dt: number): void {}

  protected updateEntities(dt: number): void {
    super.updateEntities(dt);

    if (this.shouldUpdate) {
      //(this.emoji + ' Render should re-render due to changed entities.');
      if (this.shouldUpdateCallback) {
        this.shouldUpdateCallback(Date.now());
      }
      this.shouldUpdate = false;
    }
  }

  protected entityAdded = ({}: EntitySnapshot) => {
    // Also, if any additional Regeneration buff will appear in the entity, we will handle
    // them as well and instantly heal the hero
    //current.onComponentAdded.connect(this.rerender);
    this.shouldUpdate = true;
  };

  protected entityRemoved = ({}: EntitySnapshot) => {
    // We don't want to know if any new components were added to the entity when it left
    // the queue already.
    //current.onComponentAdded.disconnect(this.rerender);
    this.shouldUpdate = true;
  };

  // private rerender = (entity: Entity, component: unknown) => {
  //   if (this.query.has(entity)) {
  //     this.shouldRender = true;
  //   }
  // };

  public get entities(): readonly Entity[] {
    return this.query.entities;
  }
}

declare type Class<T> = {
  new (...args: any[]): T;
};

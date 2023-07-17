import { Facet } from "../base/Facet";

export interface PointsProps {
  pointsValue: number;
}

export class PointsFacet extends Facet<PointsProps> {
  constructor(props: PointsProps) {
    super(props);
  }
}

export interface TypeProps {
  typeName: string;
}

export class TypeFacet extends Facet<TypeProps> {
  constructor(props: TypeProps) {
    super(props);
  }
}

export interface VisibilityProps {
  isVisible: boolean;
}

export class VisibilityFacet extends Facet<VisibilityProps> {
  constructor(props: VisibilityProps) {
    super(props);
  }
}

export interface ValueProps {
  value: number;
}

export class ValueFacet extends Facet<ValueProps> {
  constructor(props: ValueProps) {
    super(props);
  }
}

export interface HealthProps {
  healthValue: Array<number>;
}

export class HealthFacet extends Facet<HealthProps> {
  constructor(props: HealthProps) {
    super(props);
  }
}

export interface PositionProps {
  positionValue: Array<number>;
}

export class PositionFacet extends Facet<PositionProps> {
  constructor(props: PositionProps) {
    super(props);
  }
}

export interface NameProps {
  name: string;
}

export class NameFacet extends Facet<NameProps> {
  constructor(props: NameProps = { name: "untitled" }) {
    super(props);
  }
}

export const GameStates = {
  WELCOME: 0,
  PLAYING: 1,
  GAME_OVER: 2,
};

export interface GameStateProps {
  gameState: number;
}

export class GameStateFacet extends Facet<GameStateProps> {
  constructor(props: GameStateProps) {
    super(props);
  }
}

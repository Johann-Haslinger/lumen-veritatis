export interface Class<T> {
  new (...args: any[]): T;
}

export class Facet<T> {
  constructor(public props: T ) {}
}

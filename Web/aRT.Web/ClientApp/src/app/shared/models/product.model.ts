export class Product {
  constructor(public id: string,
              public name: string,
              public image: string,
              public description: string,
              public quantity: number,
              public price: number,
              public created_on: string) { }
}

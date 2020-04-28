export class Product {
  constructor(public _id: string | number,
              public name: string,
              public image: string,
              public description: string,
              public price: number,
              public created_on: string,) {
  }
}

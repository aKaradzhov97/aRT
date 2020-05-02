export class Category {
  constructor(public id: string,
              public name: string,
              public created_on: string,
              public subcategories: Category[]) { }
}

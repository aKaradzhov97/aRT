export class Category {
  constructor(public id: string,
              public name: string,
              public createdOn: string,
              public subcategories: Category[]) { }
}

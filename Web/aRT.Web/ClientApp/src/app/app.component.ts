// Decorators & Lifehooks
import {Component} from '@angular/core';

// Models
import {Category} from './shared/models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [
    {
      id: '1',
      name: 'Mens',
      created_on: 'Today',
      subcategories: [],
    },
    {
      id: '2',
      name: 'Womens',
      created_on: 'Today',
      subcategories: [],
    },
    {
      id: '3',
      name: 'Kids',
      created_on: 'Today',
      subcategories: [],
    },
    {
      id: '4',
      name: 'Collections',
      created_on: 'Today',
      subcategories: [],
    },
    {
      id: '5',
      name: 'HOT!',
      created_on: 'Today',
      subcategories: [],
    }
  ];
}

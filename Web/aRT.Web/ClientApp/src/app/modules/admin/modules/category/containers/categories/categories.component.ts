// Decorators & Lifehooks
import {Component, OnInit} from '@angular/core';

// RXJS
import {Observable} from 'rxjs';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

// Models
import {Category} from '../../../../../../shared/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private store: Store<fromStore.CategoriesState>) {
  }

  ngOnInit() {
    this.categories$ = this.store.select(fromStore.getAllCategories);
    this.categories$.subscribe((data) => {
      console.log(data);
    });
  }

}

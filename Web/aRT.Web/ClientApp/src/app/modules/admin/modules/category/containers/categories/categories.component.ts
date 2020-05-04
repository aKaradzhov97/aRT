// Decorators & Lifehooks
import {Component, OnInit} from '@angular/core';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

// RXJS
import {Observable} from 'rxjs';

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
    this.store.dispatch(new fromStore.LoadCategories());
  }
}

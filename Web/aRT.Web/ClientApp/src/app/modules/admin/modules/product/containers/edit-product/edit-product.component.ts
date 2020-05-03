// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

// RXJS
import {Observable} from 'rxjs';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

// Models
import {Product} from '../../../../../../shared/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit(): void {
    this.product$ = this.store.select(fromStore.getSelectedProduct);
  }

  onSubmit(value): void {
    this.store.dispatch(new fromStore.UpdateProduct(value));
  }

}

// Decorators & Lifehooks
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

// RXJS
import {Observable} from 'rxjs';

// Store
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

// Models
import {Product} from '../../../../shared/models/product.model';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsProductComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.product$ = this.store.select(fromStore.getSelectedProduct);
  }

  onRemove(value): void {
    const CONFIRMATION = window.confirm('Are you sure you want to delete this product?');

    if (CONFIRMATION) {
      this.store.dispatch(new fromStore.DeleteProduct(value));
    }
  }

}

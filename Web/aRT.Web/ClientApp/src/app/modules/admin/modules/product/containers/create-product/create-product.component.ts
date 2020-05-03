// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component} from '@angular/core';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductComponent {

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  onSubmit(value): void {
    this.store.dispatch(new fromStore.CreateProduct(value));
  }

}

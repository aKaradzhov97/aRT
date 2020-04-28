// Decorators & Lifehooks
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

// Models
import {Product} from '../../../../shared/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() products: Product[] = null;
}

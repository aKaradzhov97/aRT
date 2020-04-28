// Decorators & Lifehooks
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

// Models
import {Product} from '../../../../shared/models/product.model';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Product = null;

  constructor() {
  }

  ngOnInit() {
  }

}

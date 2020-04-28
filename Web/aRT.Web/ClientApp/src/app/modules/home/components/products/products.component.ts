// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

// Models
import {Product} from '../../../../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}

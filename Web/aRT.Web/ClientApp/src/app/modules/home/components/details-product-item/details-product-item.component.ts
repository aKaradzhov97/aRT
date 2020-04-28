// Decorators & Lifehooks
import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

// Models
import {Product} from '../../../../shared/models/product.model';

@Component({
  selector: 'app-details-product-item',
  templateUrl: './details-product-item.component.html',
  styleUrls: ['./details-product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsProductItemComponent implements OnInit {

  @Input() product: Product = null;
  @Output() onRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProduct() {
    this.onRemove.emit(this.product);
  }

}

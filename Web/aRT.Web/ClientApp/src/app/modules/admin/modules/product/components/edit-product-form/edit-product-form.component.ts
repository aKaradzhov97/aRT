// Decorators and Lifehooks
import {Component, EventEmitter, OnInit, Input, Output, ChangeDetectionStrategy} from '@angular/core';

// Forms
import {FormGroup, FormControl, Validators} from '@angular/forms';

// Models
import {Product} from '../../../../../../shared/models/product.model';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductFormComponent implements OnInit {

  @Input() product: Product = null;

  editProductForm: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor() { }

  onSubmit(): void {
    const data = this.editProductForm.value;
    data.id = this.product.id;

    this.formSubmit.emit(data);
  }

  ngOnInit(): void {
    this.editProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });

    this.editProductForm.patchValue(this.product);
  }

}

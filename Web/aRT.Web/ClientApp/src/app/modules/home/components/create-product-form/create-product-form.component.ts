// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

// Forms
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductFormComponent implements OnInit {

  createProductForm: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor() { }

  onSubmit(): void {
    this.formSubmit.emit(this.createProductForm.value);
  }

  ngOnInit():void {
    this.createProductForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
    });
  }
}

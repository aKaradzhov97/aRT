// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

// Forms
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor() { }

  onSubmit(): void {
    this.formSubmit.emit(this.registerForm.value);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }
}

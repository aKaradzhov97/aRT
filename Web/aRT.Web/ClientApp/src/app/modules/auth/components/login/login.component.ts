// Decorators and Lifehooks
import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

// Forms
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor() { }

  onSubmit(): void {
    this.formSubmit.emit(this.loginForm.value);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}


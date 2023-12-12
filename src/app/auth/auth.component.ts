import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  form: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }
}

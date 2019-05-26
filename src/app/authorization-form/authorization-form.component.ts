import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: [ './authorization-form.component.css' ]
})
export class AuthorizationFormComponent implements OnInit {

  email = new FormControl('', [ Validators.required, Validators.email ]);
  password = new FormControl();
  hide = true;

  constructor(private authorizationService: AuthorizationService) { }

  signIn(): void {
    console.log(this.email);
    console.log(this.password);
    const user = {
      email: this.email.value,
      password: this.password.value
    };

    this.authorizationService.signIn(user).subscribe();
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

}

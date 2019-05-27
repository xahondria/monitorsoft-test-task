import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './auth-form.component.html',
  styleUrls: [ './auth-form.component.css' ]
})
export class AuthFormComponent implements OnInit {

  email = new FormControl('', [ Validators.required, Validators.email ]);
  password = new FormControl();
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(): void {
    const user = {
      email: this.email.value,
      password: this.password.value
    };

    this.authService.register(user).subscribe(
      () => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate([ '/users' ]);
        }
      }
    );

  }

  logIn(): void {
    const user = {
      email: this.email.value,
      password: this.password.value
    };

    this.authService.login(user).subscribe(
      () => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate([ '/users' ]);
        }
      }
    );
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  /** Opens modal window */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AuthFormComponent, dialogConfig);
  }

  ngOnInit() {
  }

}

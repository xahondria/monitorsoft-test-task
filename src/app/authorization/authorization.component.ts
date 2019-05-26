import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthorizationFormComponent } from '../authorization-form/authorization-form.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  /** Opens modal window */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AuthorizationFormComponent, dialogConfig);
  }

  ngOnInit() {
  }

}

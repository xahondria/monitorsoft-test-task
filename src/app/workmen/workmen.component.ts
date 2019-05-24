import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserCreatorComponent } from '../user-creator/user-creator.component';

@Component({
  selector: 'app-workmen',
  templateUrl: './workmen.component.html',
  styleUrls: ['./workmen.component.css']
})
export class WorkmenComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(UserCreatorComponent, dialogConfig);
  }

  ngOnInit() {
  }

}

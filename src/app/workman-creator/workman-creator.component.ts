import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Workman } from '../workman';
import { WorkmanService } from '../workman.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-creator',
  templateUrl: './workman-creator.component.html',
  styleUrls: [ './workman-creator.component.css' ]
})
export class WorkmanCreatorComponent implements OnInit {

  formGroup: FormGroup;
  newWorkman: Workman;

  constructor(
    private workmanService: WorkmanService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  submit() {
    this.newWorkman = this.formGroup.value;
    // TODO add validation
    if (!this.newWorkman.name || !this.newWorkman.job) {
      return;
    }
    this.workmanService.addWorkman(this.newWorkman as Workman)
      .subscribe(workman => this.workmanService.newWorkman.next(workman));
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      job: new FormControl()
    });

    if (this.data.workman) {
      this.formGroup.value.name = this.data.workman.name;
      console.log(this.formGroup.value.name);
    }
  }

}

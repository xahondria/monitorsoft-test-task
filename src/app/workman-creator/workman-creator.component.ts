import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Workman } from '../workman';
import { WorkmanService } from '../workman.service';

@Component({
  selector: 'app-user-creator',
  templateUrl: './workman-creator.component.html',
  styleUrls: [ './workman-creator.component.css' ]
})
export class WorkmanCreatorComponent implements OnInit {

  formGroup: FormGroup;
  newWorkman: Workman;

  constructor(private workmanService: WorkmanService) {}

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
  }

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTable } from '@angular/material';
import { WorkmanCreatorComponent } from '../workman-creator/workman-creator.component';
import { Workman } from '../workman';
import { WorkmanService } from '../workman.service';

@Component({
  selector: 'app-workmen',
  templateUrl: './workmen.component.html',
  styleUrls: [ './workmen.component.css' ]
})
export class WorkmenComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Workman>;

  dataSource: Workman[] = [];
  workmen: Workman[];
  displayedColumns: string[] = [ 'id', 'name', 'job', 'createdAt' ];

  constructor(
    private dialog: MatDialog,
    private workmanService: WorkmanService,
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(WorkmanCreatorComponent, dialogConfig);
  }

  addWorkman() {
    this.workmanService.newWorkman.subscribe(workman => {
      this.dataSource.push(workman);
      if (this.table) {
        this.table.renderRows();
      }
    });
  }

  ngOnInit(): void {
    this.addWorkman();
  }

  ngAfterViewInit(): void {
  }

}

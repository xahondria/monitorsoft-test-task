import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTable } from '@angular/material';
import { WorkmanCreatorComponent } from '../workman-creator/workman-creator.component';
import { Workman } from '../workman';
import { WorkmanService } from '../workman.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-workmen',
  templateUrl: './workmen.component.html',
  styleUrls: [ './workmen.component.css' ]
})
export class WorkmenComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Workman>;

  workmen: Workman[];
  dataSource: Workman[] = [];
  displayedColumns: string[] = [ 'select', 'id', 'name', 'job', 'createdAt' ];
  selection = new SelectionModel<Workman>(true, []);

  @HostListener('document: keydown.escape', [ '$event' ]) onEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.selection.selected.length) {
      this.selection.clear();
    }
  }

  constructor(
    private dialog: MatDialog,
    private workmanService: WorkmanService,
  ) {}

  /** Opens modal window */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(WorkmanCreatorComponent, dialogConfig);
  }

  /** Adds an element to the table */
  add(): void {
    this.workmanService.newWorkman.subscribe(workman => {
      this.dataSource.push(workman);
      if (this.table) {
        this.table.renderRows();
      }
    });
  }

  /** Updates an element */
  update(workman: Workman): void {
    this.workmanService.updateWorkman(workman)
      .subscribe();
  }

  /** Deletes an element */
  delete(): void {
    this.dataSource = this.dataSource.filter(element => !this.selection.selected.includes(element));
    this.selection.selected.forEach(selectedElement => this.workmanService.deleteWorkman(selectedElement).subscribe());
    this.selection.clear();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Workman): string {
    if (!row) {
      return `${ this.isAllSelected() ? 'select' : 'deselect' } all`;
    }
    return `${ this.selection.isSelected(row) ? 'deselect' : 'select' } row ${ row.id }`;
  }

  ngOnInit(): void {
    this.add();
  }

  ngAfterViewInit(): void {
  }

}

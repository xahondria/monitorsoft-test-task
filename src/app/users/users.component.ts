import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog, MatDialogConfig, MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
import { Page } from '../page';
import { User } from '../user';
import { UserCreatorComponent } from '../user-creator/user-creator.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements AfterViewInit, OnInit {
  page: Page;
  totalUsers: number;
  dataSource: User[];
  displayedColumns: string[] = [ 'id', 'email', 'first_name', 'last_name', 'avatar' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {
  }

  getUsersPage(page, elementsPerPage): void {
    this.userService.getUsersPage(page, elementsPerPage).subscribe(p => {
      this.page = p;
      this.totalUsers = p.total;
      this.dataSource = p.data;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(UserCreatorComponent, dialogConfig);
  }

  ngOnInit() {
    this.getUsersPage(1, 3);
  }

  /**
   * Link Paginator to the Data Source
   */
  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.getUsersPage(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize))
    ).subscribe();
  }

}

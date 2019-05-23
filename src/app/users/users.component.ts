import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
import { Page } from '../page';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements AfterViewInit, OnInit {
  dataSource: Page;
  displayedColumns: string[] = [ 'id', 'email', 'first_name', 'last_name', 'avatar' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {
  }

  getUsersPage(page, elementsPerPage): void {
    this.userService.getUsersPage(page, elementsPerPage).subscribe(data => this.dataSource = data);
  }

  ngOnInit() {
    this.getUsersPage(1, 3);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.getUsersPage(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize))
    ).subscribe();
  }

}

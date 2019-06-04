import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
import { Page } from '../page';
import { User } from '../user';

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
  isPageLoaded = false;
  cursorPosition: object = {top: 0, left: 0};

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserService,
  ) {
  }

  @HostListener('document: mousemove', [ '$event' ])

  onMouseMove(e) {
    this.cursorPosition = {
      top: `${ e.clientY - 15 }px`,
      left: `${ e.clientX - 15 }px`,
    };
  }

  getUsersPage(page, elementsPerPage): void {
    this.isPageLoaded = false;
    this.userService.getUsersPage(page, elementsPerPage).subscribe(p => {
      this.page = p;
      this.totalUsers = p.total;
      this.dataSource = p.data;
      this.isPageLoaded = true;
    });
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

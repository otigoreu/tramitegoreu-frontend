import { inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { AppService } from '../../service/person-service.service';
import { Personas } from '../../model/persona';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent implements OnInit, AfterViewInit {
  title = 'TramiteGoreu-FrontEnd';

  appService = inject(AppService);
  authService = inject(AuthService);

  displayedColumns: string[] = [
    'id',
    'nombres',
    'fechaNac',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<Personas>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dialog = inject(MatDialog);

  constructor() {
    const users: Personas[] = [];
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.appService.getData().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: number) {
    if (confirm('Eliminar?')) {
      this.appService.deletePerson(id).subscribe((response) => {
        if (response.success) {
          alert('Usuario eliminado');
          this.loadData();
        }
      });
    }
  }
  edit(id: number) {
    this.dialog
      .open(EditDialogComponent, {
        data: {
          personId: id,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.loadData();
      });
  }

  new() {
    this.dialog
      .open(NewDialogComponent)
      .afterClosed()
      .subscribe(() => {
        this.loadData();
      });
  }
  logout() {
    this.authService.logout();
  }
}

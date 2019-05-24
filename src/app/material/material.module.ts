import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule
} from '@angular/material';

const MaterialComponents = [
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule {
}

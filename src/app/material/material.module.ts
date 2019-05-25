import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
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
  MatFormFieldModule,
  MatMenuModule,
  MatListModule,
  MatCheckboxModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }

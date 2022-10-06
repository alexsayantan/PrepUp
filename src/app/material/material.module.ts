import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';

const material: any[] = [
  CommonModule,
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    material,
    BrowserAnimationsModule,
  ],
  exports: [
    material,
  ]
})
export class MaterialModule { }

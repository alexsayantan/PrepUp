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
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const material: any[] = [
  CommonModule,
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule
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

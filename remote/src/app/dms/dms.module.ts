import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DmsComponent } from './dms.component';

const DMS_ROUTES: Routes = [
  {
    path: '',
    component: DmsComponent
  }
];

@NgModule({
  declarations: [
    DmsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DMS_ROUTES),
  ]
})
export class DmsModule { }

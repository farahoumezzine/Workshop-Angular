import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {
    path: '',
    component: AproposComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AproposModule { }

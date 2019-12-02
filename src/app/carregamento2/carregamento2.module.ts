import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Carregamento2Page } from './carregamento2.page';

const routes: Routes = [
  {
    path: '',
    component: Carregamento2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Carregamento2Page]
})
export class Carregamento2PageModule {}

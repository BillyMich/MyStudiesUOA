import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './Home/home-template/home-template.component';

const routes: Routes = [

  { path: '', component: HomeTemplateComponent }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './Home/home-template/home-template.component';
import { AuthendticationTemplateComponent } from './Authentication/authendtication-template/authendtication-template.component';
import { LoginComponent } from './Authentication/login/login.component';
import { StudentTemplateComponent } from './Student/student-template/student-template.component';

const routes: Routes = [

  { path: '', component: HomeTemplateComponent }, // default route
  { path: '\login', component: LoginComponent }, // default route
  {path : '\student', component: StudentTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

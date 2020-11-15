import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';


const routes: Routes = [
  {
    path:'about',
    loadChildren:()=> import('./about/about.module').then(m=> m.AboutModule),
    data: {animation: 'AboutPage'}
  },
  {
    path:'resume',
    loadChildren:()=> import('./resume/resume.module').then(m=> m.ResumeModule),
    data: {animation: 'AboutPage'}
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/about'
  },
  {path:'**',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

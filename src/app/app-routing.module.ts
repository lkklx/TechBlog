import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {PostComponent} from './pages/home/post/post.component'
const routes: Routes = [
  
    {
      path: '', component: HomeComponent
    },
    {
      path: 'about',component: AboutComponent
    },
    {
      path: 'contact', component: ContactComponent
    },
    {
      path: 'post/:id', component: PostComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

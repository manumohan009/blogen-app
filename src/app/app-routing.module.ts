import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [] },
  { path: 'category', component: CategoryComponent },
  { path: 'post', component: PostComponent },
  { path: 'user', component: UserComponent },
  { path: 'profile', component: HomeComponent },
  { path: 'setting', component: HomeComponent },
  { path: 'logout', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

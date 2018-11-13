import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { PostComponent } from "./post/post.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent, pathMatch: "full" },
      // { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "category", component: CategoryComponent },
      { path: "post", component: PostComponent },
      { path: "user", component: UserComponent }

      // { path: "*", component: LoginComponent },
      // { path: "**", component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

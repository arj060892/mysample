import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCountComponent } from './post-count/post-count.component';

const routes: Routes = [
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'postsdetail/:id', component: PostDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PostDetailComponent,
    PostCountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewpostComponent } from './newpost/newpost.component';
import { HeaderComponent } from './header/header.component';
import { PostService } from './services/post.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path : 'posts', component: PostlistComponent },
  { path : 'new', component: NewpostComponent },
  { path : '', redirectTo: 'posts', pathMatch: 'full' },
  { path : '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewpostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

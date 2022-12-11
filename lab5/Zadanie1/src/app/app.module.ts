import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DisplayPhotosComponent} from './display-photos/display-photos.component';
import {DisplayPostsComponent} from './display-posts/display-posts.component';
import {SinglePostComponent} from './display-posts/single-post/single-post.component';
import {HttpClientModule} from '@angular/common/http';
import { NewPostComponent } from './display-posts/new-post/new-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SinglePhotoComponent } from './display-photos/single-photo/single-photo.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        DisplayPhotosComponent,
        DisplayPostsComponent,
        SinglePostComponent,
        NewPostComponent,
        SinglePhotoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

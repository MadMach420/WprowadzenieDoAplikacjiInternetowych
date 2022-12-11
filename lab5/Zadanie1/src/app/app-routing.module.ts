import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DisplayPhotosComponent} from "./display-photos/display-photos.component";
import {DisplayPostsComponent} from "./display-posts/display-posts.component";
import {SinglePhotoComponent} from "./display-photos/single-photo/single-photo.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'photos', component: DisplayPhotosComponent },
    { path: 'photos/:id', component: SinglePhotoComponent },
    { path: 'posts', component: DisplayPostsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

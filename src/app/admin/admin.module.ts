import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TagsComponent } from './tags/tags.component';
import { PageComponent } from './page/page.component';
import { ResourcesComponent } from './resources/resources.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles/articles.component';
import { DocumentsComponent } from './resources/documents/documents.component';
import { ImagesComponent } from './resources/images/images.component';
import { VideosComponent } from './resources/videos/videos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TagsComponent,
    PageComponent,
    ResourcesComponent,
    UsersComponent,
    ProfileComponent,
    ArticlesComponent,
    DocumentsComponent,
    ImagesComponent,
    VideosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }

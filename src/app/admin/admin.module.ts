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

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TagsComponent,
    PageComponent,
    ResourcesComponent,
    UsersComponent,
    ProfileComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }

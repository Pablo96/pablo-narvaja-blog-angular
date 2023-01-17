import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PageComponent } from './admin/page/page.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DocumentsComponent } from './admin/resources/documents/documents.component';
import { ImagesComponent } from './admin/resources/images/images.component';
import { ResourcesComponent } from './admin/resources/resources.component';
import { VideosComponent } from './admin/resources/videos/videos.component';
import { TagsComponent } from './admin/tags/tags.component';
import { UsersComponent } from './admin/users/users.component';


const routes: Routes = [
  {
    path: 'admin', 
    component: AdminComponent, 
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent,
        children: [
          {
            path: 'images',
            component: ImagesComponent
          },
          {
            path: 'videos',
            component: VideosComponent
          },
          {
            path: 'documents',
            component: DocumentsComponent
          }
        ]
      },
      {
        path: 'page',
        component: PageComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostSearch } from '../resolvers/post-search.resolver'
import { PostService } from '../services/post.service';
import { PostListKeywordComponent } from './post-list-keyword/post-list-keyword.component';

const routes: Routes = [
  {
    path: 'busqueda/:palabra',
    component: PostListKeywordComponent,
    resolve: { data: PostSearch }
  },
  {
    path: ':id',
    component: PostDetailComponent
  },
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PostSearch,
    PostService
  ]
})
export class PostsRoutingModule { }

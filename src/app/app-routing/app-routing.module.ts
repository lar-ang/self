import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from '../post-list/post-list.component';
import { PostCreateComponent } from '../post-create/post-create.component';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostEditComponent } from '../post-edit/post-edit.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/create', component: PostCreateComponent },
  { path: 'posts/:id', component: PostItemComponent },
  { path: 'posts/:id/edit', component: PostEditComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

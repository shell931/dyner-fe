import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const routes: Routes = [
  {
      path:'',
      children: [
          {
              path: 'blog', title:"Valex - Blog",
              component:BlogComponent
          },
          {
              path: 'blog-details', title:"Valex - Blog Details",
              component:BlogDetailsComponent
          },
          {
              path: 'blog-edit', title:"Valex - Blog Edit",
              component: BlogEditComponent
          }
      
      ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPagesRoutingModule { }

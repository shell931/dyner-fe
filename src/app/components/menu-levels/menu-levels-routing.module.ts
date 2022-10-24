import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';

const routes: Routes = [
  {
      path:'',
      children: [
          {
              path: 'level-one',
              component:LevelOneComponent
          },
          {
              path: 'level-two',
              component: LevelTwoComponent
          }
      
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLevelsRoutingModule { }

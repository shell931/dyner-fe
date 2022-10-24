import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLevelsRoutingModule } from './menu-levels-routing.module';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';


@NgModule({
  declarations: [
    LevelOneComponent,
    LevelTwoComponent
  ],
  imports: [
    CommonModule,
    MenuLevelsRoutingModule
  ]
})
export class MenuLevelsModule { }

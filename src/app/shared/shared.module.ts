import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { SidemenuComponent } from './componets/sidemenu/sidemenu.component';
import { TapToTopComponent } from './componets/tap-to-top/tap-to-top.component';
import { LoaderComponent } from './componets/loader/loader.component';
import { NotificationSidebarComponent } from './componets/notification-sidebar/notification-sidebar.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SwitcherComponent } from './componets/switcher/switcher.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { SwitcherOneLayoutsComponent } from './layouts/switcher-one-layouts/switcher-one-layouts.component';
import { HeaderOneComponent } from './componets/header-one/header-one.component';
// import "./componets/sidemenu/sidemenu" 




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidemenuComponent, SwitcherComponent, TapToTopComponent, LoaderComponent, NotificationSidebarComponent, FullLayoutComponent, ContentLayoutComponent, FullscreenDirective, 
  HoverEffectSidebarDirective,
  ToggleThemeDirective,
  SwitcherOneLayoutsComponent,
  HeaderOneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PerfectScrollbarModule,
    ColorPickerModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    LoaderComponent,
    TapToTopComponent,
    FooterComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
  ]
})
export class SharedModule { }

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './cards/cards.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { DarggablecardsComponent } from './darggablecards/darggablecards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotificationComponent } from './notification/notification.component';
import { WidgetNotificationComponent } from './widget-notification/widget-notification.component';
import { AppsRoutingModule } from './apps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TreeviewComponent } from './treeview/treeview.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DragulaModule } from 'ng2-dragula';
import { FileManagerModule } from './file-manager/file-manager.module';
import { ImageCompareComponent } from './image-compare/image-compare.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

//Custom angular notifier options
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 15
    },
    vertical: {
      position: 'top',
      distance: 15,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
const customNotifierOptions1: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 15
    },
    vertical: {
      position: 'top',
      distance: 15,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};
@NgModule({
  declarations: [CalendarComponent, CardsComponent, RangesliderComponent, DarggablecardsComponent, ContactsComponent, NotificationComponent, WidgetNotificationComponent, TreeviewComponent, ImageCompareComponent,],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    DragulaModule.forRoot(),
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    NotifierModule.withConfig(customNotifierOptions1),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    // FlatpickrModule.forRoot(),
    MatTreeModule, MatIconModule, MatProgressBarModule,
    FileManagerModule,
    PerfectScrollbarModule
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppsModule { }

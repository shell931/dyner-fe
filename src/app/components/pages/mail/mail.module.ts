import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [
    MailComponent,
    MailComposeComponent,
    ReadMailComponent,
    MailSettingsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    PerfectScrollbarModule
  ]
})
export class MailModule { }

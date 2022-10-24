import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component'; 
import { MailComponent } from './mail/mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'mail', title:"Valex - Mail",
              component: MailComponent
          },
          {
              path: 'mail-compose', title:"Valex - Mail Compose",
              component: MailComposeComponent
          },
          {
              path: 'read-mail', title:"Valex - Read Mail",
              component: ReadMailComponent
          },
          {
              path: 'mail-settings', title:"Valex - Mail Settings",
              component: MailSettingsComponent
          },
          {
              path: 'chat', title:"Valex - Chat",
              component: ChatComponent
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }

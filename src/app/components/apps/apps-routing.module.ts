import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardsComponent } from "./cards/cards.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { DarggablecardsComponent } from "./darggablecards/darggablecards.component";
import { ImageCompareComponent } from "./image-compare/image-compare.component";
import { NotificationComponent } from "./notification/notification.component";
import { RangesliderComponent } from "./rangeslider/rangeslider.component";
import { TreeviewComponent } from "./treeview/treeview.component";
import { WidgetNotificationComponent } from "./widget-notification/widget-notification.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'calendar', title:"Valex - Calendar",
                component: CalendarComponent
            },
            {
                path: 'cards', title:"Valex - Cards",
                component: CardsComponent
            },
            {
                path: 'contacts', title:"Valex - Contacts",
                component: ContactsComponent
            },
            {
                path: 'darggablecards', title:"Valex - Darggablecards",
                component: DarggablecardsComponent
            },
            {
                path: 'notification', title:"Valex - Notification",
                component: NotificationComponent
            },
            {
                path: 'rangeslider', title:"Valex - Rangeslider",
                component: RangesliderComponent
            },
            {
                path: 'treeview', title:"Valex - Treeview",
                component: TreeviewComponent
            },
            {
                path: 'widgetnotification', title:"Valex - Widgetnotification",
                component: WidgetNotificationComponent
            },
            {
                path: 'image-compare', title:"Valex - Image Compare",
                component: ImageCompareComponent
            }     
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule {}
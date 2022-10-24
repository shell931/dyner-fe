import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccordionComponent } from "./accordion/accordion.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { CountersComponent } from "./counters/counters.component";
import { ModalsComponent } from "./modals/modals.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { SearchComponent } from "./search/search.component";
import { SweetAlertComponent } from "./sweet-alert/sweet-alert.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { UserlistComponent } from "./userlist/userlist.component";

const routes: Routes = [
    {
        path:'',
        children: [
            {
                path: 'accordion', title:"Valex - Accordion",
                component:AccordionComponent
            },
            {
                path: 'carousel', title:"Valex - Carousel",
                component: CarouselComponent
            },
            {
                path: 'collapse', title:"Valex - Collapse",
                component: CollapseComponent
            },
            {
                path: 'modals', title:"Valex - Modals",
                component: ModalsComponent
            },
            {
                path: 'ratings', title:"Valex - Ratings",
                component: RatingsComponent
            },
            {
                path: 'search', title:"Valex - Search",
                component: SearchComponent
            },
            {
                path: 'sweet-alert', title:"Valex - Sweet Alert",
                component: SweetAlertComponent
            },
            {
                path: 'timeline', title:"Valex - Timeline",
                component: TimelineComponent
            },
            {
                path: 'userlist', title:"Valex - Userlist",
                component: UserlistComponent
            },
            {
                path: 'counters', title:"Valex - Counters",
                component: CountersComponent
            }
        
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdvancedRoutingModule {}
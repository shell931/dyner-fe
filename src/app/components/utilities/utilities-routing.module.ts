import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackgroundComponent } from "./background/background.component";
import { BorderComponent } from "./border/border.component";
import { DisplayComponent } from "./display/display.component";
import { ExtrasComponent } from "./extras/extras.component";
import { FlexComponent } from "./flex/flex.component";
import { HeightComponent } from "./height/height.component";
import { MarginComponent } from "./margin/margin.component";
import { PaddingComponent } from "./padding/padding.component";
import { PositionComponent } from "./position/position.component";
import { WidthComponent } from "./width/width.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'background', title:"Valex - Background",
                component: BackgroundComponent
            },
            {
                path: 'border', title:"Valex - Border",
                component: BorderComponent
            },
            {
                path: 'display', title:"Valex - Display",
                component: DisplayComponent
            },
            {
                path: 'extras', title:"Valex - Extras",
                component: ExtrasComponent
            },
            {
                path: 'flex', title:"Valex - Flex",
                component: FlexComponent
            },
            {
                path: 'height', title:"Valex - Height",
                component: HeightComponent
            },
            {
                path: 'margin', title:"Valex - Margin",
                component: MarginComponent
            },
            {
                path: 'padding', title:"Valex - Padding",
                component: PaddingComponent
            },
            {
                path: 'position', title:"Valex - Position",
                component: PositionComponent
            },
            {
                path: 'width', title:"Valex - Width",
                component: WidthComponent
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UtilitiesRoutingModule { }
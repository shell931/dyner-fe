import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Perfil",
                component: ProfileComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDocumentsComponent } from './profile-documents/profile-documents.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner - Perfil",
                component: ProfileDocumentsComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule { }

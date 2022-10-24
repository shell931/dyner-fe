import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { FileManagerDetailsComponent } from './file-manager-details/file-manager-details.component'; 
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';


const routes: Routes = [
  {
    path:'file-manager',
    children:[
      {path:'file-attachments', title:"Valex - File Attachments", component: FileAttachmentsComponent},
      {path:'file-manager', title:"Valex - File Manager", component: FileManagerComponent},
      {path:'file-manager-details', title:"Valex - File Manager Details", component: FileManagerDetailsComponent},
      {path:'file-manager-list', title:"Valex - File Manager List", component: FileManagerListComponent}     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }

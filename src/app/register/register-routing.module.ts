import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: "Dyner24 - Registro",
        component: WizardComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';
import { SuccessRegisterComponent } from './components/success-register/success-register.component';

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
  },
  {
    path: 'finalizado',
    children: [
      {
        path: '',
        title: "Dyner24 - Registro Exitoso",
        component: SuccessRegisterComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

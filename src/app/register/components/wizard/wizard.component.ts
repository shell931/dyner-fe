import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from '../../shared-service';
import { MemberShipService } from 'src/app/services/membership.services';
import { AlertsService } from 'src/app/services/alerts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [SharedService],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {

  public currentStep = 1;
  public totalSteps = 4;
  public currentFormValid = false;
  public identificationTypes: any[] = [];
  public economityActivities: any[] = [];
  public departments: any[] = [];
  public cities: any[] = [];
  public flowData: any = {};
  public stepInfoData = [
    { title: 'Abre tu cuenta', description: 'Sube los siguientes documentos. Serán necesarios para completar el proceso de verificación.' },
    { title: 'Abre tu cuenta', description: 'La siguiente información no limitará el acceso a tus herramientas, es solo de carácter informativo.' },
    { title: 'Abre tu cuenta', description: '' },
    { title: 'Abre tu cuenta', description: '' },
    { title: 'Abre tu cuenta', description: 'Sube los siguientes documentos. Serán necesarios para completar el proceso de verificación.' },
  ];

  constructor(private commonService: CommonService, private membershipService: MemberShipService, private sharedService: SharedService, private alertsService: AlertsService) {
  }

  async ngOnInit() {
    this.alertsService.infoAlert({
      title: 'Ten presente',
      text: 'Para tu proceso de afiliación se solicitarán documentos e información básica de tu negocio. Adicionalmente, te solicitaremos fotografías de tus documentos y de tu establecimiento.',
    })
    this.identificationTypes = await this.commonService.getIdentificationTypes();
    this.economityActivities = await this.commonService.getEconomityActivities();
    this.departments = await this.commonService.getDepartments();
  }

  public async getCities(departmentId) {
    this.cities = await this.commonService.getCitiesByDepartment(departmentId);
  }

  previousStep() {
    this.sharedService.emitEvent();
    this.currentStep--;
  }

  nextStep() {
    this.sharedService.emitEvent();
    if (this.currentFormValid) {
      if (this.currentStep >= this.totalSteps) {
        this.storeMembership(this.flowData);
      } else {
        this.currentStep++;
      }
    }
  }

  getDataCurrentForm(form) {
    this.currentFormValid = form.valid;
    this.flowData = {
      ...this.flowData,
      ...form?.value
    }
  }

  public async storeMembership(data) {
    try {
      const response = await this.membershipService.storeMembershipService(data);
      if (response.success) {
        this.alertsService.infoAlert({
          title: 'Perfecto',
          text: 'Tu registro a sido realizado con exito',
        });
      }
    } catch (error) {
      this.alertsService.infoAlert({
        title: 'Error',
        text: 'Se ha presentado un error, consulte con el administrador del sistema',
        icon: 'error'
      })
    }
  }
}

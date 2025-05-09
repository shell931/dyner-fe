import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from '../../shared-service';
import { MemberShipService } from 'src/app/services/membership.services';
import { AlertsService } from 'src/app/services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [SharedService],
})
export class WizardComponent implements OnInit, AfterViewInit, OnDestroy {
  public currentStep = 1;
  public totalSteps = 5;
  public currentFormValid = false;
  public identificationTypes: any[] = [];
  public economityActivities: any[] = [];
  public departments: any[] = [];
  public cities: any[] = [];
  public flowData: any = {};
  public stepInfoData = [
    {
      title: 'Abre tu cuenta',
      description:
        'Sube los siguientes documentos. Serán necesarios para completar el proceso de verificación.',
    },
    {
      title: 'Abre tu cuenta',
      description:
        'La siguiente información no limitará el acceso a tus herramientas, es solo de carácter informativo.',
    },
    { title: 'Abre tu cuenta', description: '' },
    { title: 'Abre tu cuenta', description: '' },
    {
      title: 'Abre tu cuenta',
      description: 'Con esta contraseña tendras acceso a la plataforma',
    },
  ];

  constructor(
    private commonService: CommonService,
    private membershipService: MemberShipService,
    private sharedService: SharedService,
    private alertsService: AlertsService,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  async ngOnInit() {
    this.alertsService.openInfoAlert({
      title: 'Recuerda',
      text: 'Para tu proceso de afiliación se solicitarán documentos e información básica de tu negocio. Adicionalmente, te solicitaremos fotografías de tus documentos y de tu establecimiento.',
    });
    this.identificationTypes =
      await this.commonService.getIdentificationTypes();
    this.economityActivities =
      await this.commonService.getEconomityActivities();
    this.departments = await this.commonService.getDepartments();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#232323';
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#e1e1e1';
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
      ...form?.value,
    };
  }

  public async storeMembership(data) {
    try {
      this.alertsService.openLoadingAlert({});
      const response = await this.membershipService.storeMembershipService(
        data
      );
      if (response?.success) {
        this.alertsService.closeAlert();
        this.router.navigate([`/registro/finalizado`], {
          queryParams: { name: `${data?.firstName} ${data?.lastName}` },
        });
      }
    } catch (error: any) {
      this.alertsService.closeAlert();
      let errorObject = {
        title: 'Error!',
        icon: 'error',
        text: 'Se ha presentado un error, consulte con el administrador del sistema',
      };
      if (error?.error?.message?.startsWith('SQLSTATE[23505]')) {
        errorObject = {
          title: 'Atención!',
          icon: 'warning',
          text: 'Usuario ya Existe!',
        };
      }
      this.alertsService.openInfoAlert(errorObject);
    }
  }

  public sendEndRegistration() {
    this.router.navigate([`/registro/finalizado`], {
      queryParams: { name: `Edwar Pineda` },
    });
  }
}

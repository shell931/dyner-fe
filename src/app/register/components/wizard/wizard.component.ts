import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {

  public currentStep = 1;
  public totalSteps = 4;
  public identificationTypes: any[] = [];
  public economityActivities: any[] = [];
  public departments: any[] = [];

  constructor(private commonService: CommonService) {
  }

  async ngOnInit() {
    Swal.fire({
      title: 'Ten presente',
      text: 'Para tu proceso de afiliación se solicitarán documentos e información básica de tu negocio. Adicionalmente, te solicitaremos fotografías de tus documentos y de tu establecimiento.',
      confirmButtonText: 'Entendido',
      background: '#282828',
      customClass: {
        popup: 'text-white',
        confirmButton: 'btn btn-success-dyner'
      }
    });
    this.identificationTypes = await this.commonService.getIdentificationTypes();
    this.economityActivities = await this.commonService.getEconomityActivities();
    this.departments = await this.commonService.getDepartments();
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }
}

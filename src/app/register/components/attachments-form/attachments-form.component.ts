import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { MemberShipService } from 'src/app/services/membership.services';
import { ProfileService } from 'src/app/services/profile.service';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-attachments-form',
  templateUrl: './attachments-form.component.html',
  styleUrls: ['./attachments-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttachmentsFormComponent implements OnInit {

  public formTitle = 'Documentos de tu negocio';
  public formSubTitle = 'Documentos del representante legal';
  public attachmentsForm: FormGroup;
  public userId: number = 0;
  @Input() currentData: any = {};

  constructor(
    private fb: FormBuilder,
    private membershipService: MemberShipService,
    private profileService: ProfileService,
    private alertsService: AlertsService,
  ) {
    this.attachmentsForm = this.fb.group({
      commerceCertificate: ['', Validators.required],
      rut: ['', Validators.required],
      commercePhoto: ['', [Validators.required]],
      legalRepresentativePhoto: ['', [Validators.required]],
      idPhoto: ['', [Validators.required]],
    });
  }

  async ngOnInit() {
    this.getUserProfile();
  }

  /**
   * Get user data from logged user
   */
  public async getUserProfile() {
    try {
      const response: any = await firstValueFrom(this.profileService.GetProfileData().pipe(
        map(response => response)
      ));
      if (!response?.success) {
        throw new Error("No ha sido posible cargar la información del usuario");
      }
      this.userId = response?.data?.user?.id;
    } catch (error: any) {
      this.alertsService.closeAlert();
      let errorObject = {
        title: 'Error!',
        icon: 'error',
        text: 'Se ha presentado un error, consulte con el administrador del sistema'
      };
      this.alertsService.openInfoAlert(errorObject);
    }
  }

  /**
   * Upload File and transform data to form data
   * @param event 
   * @param typeDocumentId 
   * @param userId 
   */
  public onFileSelected(event, typeDocumentId, userId) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "application/pdf" || file.type === "application/doc") {
        let formData = new FormData();
        formData.append("clientId", String(userId));
        formData.append("typeDocumentId", String(typeDocumentId));
        formData.append("document", file, file?.name);
        this.uploadFileUser(formData);
      }
      else {
        // this.registerForm.reset();
        this.attachmentsForm.controls["commerceCertificate"].reset();
        this.attachmentsForm.controls["commerceCertificate"].setValidators([Validators.required]);
      }
    }
  }

  /**
   * Call service to upload files of user on active session
   * @param formData 
   */
  public async uploadFileUser(formData) {
    try {
      this.alertsService.openLoadingAlert({});
      const response = await this.membershipService.uploadFileUserService(formData);
      if (!response?.success) {
        throw new Error("No ha sido posible cargar el archivo");
      }
      this.alertsService.closeAlert();
      this.alertsService.openInfoAlert({ title: 'Perfecto', text: 'Documento cargado exitosamente' });
    } catch (error: any) {
      this.alertsService.closeAlert();
      let errorObject = {
        title: 'Error!',
        icon: 'error',
        text: 'Se ha presentado un error, consulte con el administrador del sistema'
      };
      this.alertsService.openInfoAlert(errorObject);
    }
  }

}

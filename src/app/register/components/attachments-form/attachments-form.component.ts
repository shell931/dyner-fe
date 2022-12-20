import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attachments-form',
  templateUrl: './attachments-form.component.html',
  styleUrls: ['./attachments-form.component.scss']
})
export class AttachmentsFormComponent implements OnInit {

  public formTitle = 'Documentos de tu negocio';
  public formSubTitle = 'Documentos del representante legal';
  public attachmentsForm: FormGroup;
  @Input() currentData: any = {};

  constructor(private fb: FormBuilder) {
    this.attachmentsForm = this.fb.group({
      commerceCertificate: ['', Validators.required],
      rut: ['', Validators.required],
      commercePhoto: ['', [Validators.required]],
      legalRepresentativePhoto: ['', [Validators.required]],
      idPhoto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss']
})
export class FormLayoutsComponent  {

  public customForm! : FormGroup;
  


  constructor(private modalService: NgbModal,private formBuilder : FormBuilder) { }


 
  modalOpen(basicmodal:any){
    this.modalService.open(basicmodal);
 }

 
}

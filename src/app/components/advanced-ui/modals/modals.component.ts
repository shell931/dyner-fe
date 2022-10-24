import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openScale(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__zoomIn' });
  }

  openSlideRight(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__slideInRight' });
  }

  openSlideBottom(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__backInUp' });
  }
  openNewspaper(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__rotateIn' });
  }
  openFall(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__zoomIn' });
  }
  openFlipHorizontal(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__flip' });
  }
  openFlipVertical(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__flipInX' });
  }
  openSuperScaled(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__zoomIn' });
  }
  openSign(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__flipInX' });
  }
  openRotateBottom(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__slideInUp' });
  }
  openRotateLeft(modal:any){
    this.modalService.open(modal, {centered: true, windowClass: 'animate__animated animate__slideInLeft' });
  }
  
  openJustMe(justme:any){
    this.modalService.open(justme, {centered: true , windowClass: 'dark-modal'});
  }

  openright(right:any){
    this.modalService.open(right,{centered: true})
  }

  openBasic(basicModal:any) {
    this.modalService.open(basicModal);
  }

  openSm(smallModal:any) {
    this.modalService.open(smallModal, { size: 'sm' });
  }

  openLg(largeModal:any) {
    this.modalService.open(largeModal, { size: 'lg' });
  }
 
  GridOpen(gridModal:any) {
    this.modalService.open(gridModal, { size: 'lg' });
  }

  SuccessOpen(successModal:any) {
    this.modalService.open(successModal, { centered: true });
  }

  WarningOpen(warningModal:any){
    this.modalService.open(warningModal, { centered: true});
  }

  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'sm'});
  }

  openScrollable(scrollModal:any){
    this.modalService.open(scrollModal,{ scrollable: true});
  }
 
  scrollableContent(scrollContentModal:any){
    this.modalService.open(scrollContentModal, {scrollable: true});
  }
}

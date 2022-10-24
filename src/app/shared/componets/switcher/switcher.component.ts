import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';
import * as switcher from './switcher';
import * as sidebarFn from '../sidemenu/sidemenu'

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

   lightMenu: any = document.querySelector('#myonoffswitch3');
   colorMenu: any = document.querySelector('#myonoffswitch4');
   darkMenu: any = document.querySelector('#myonoffswitch5');
   gradientMenu: any = document.querySelector('#myonoffswitch25');
   lightHeader: any = document.querySelector('#myonoffswitch6');
   darkHeader: any = document.querySelector('#myonoffswitch8');
   gradientHeader: any = document.querySelector('#myonoffswitch26');
   colorHeader: any = document.querySelector('#myonoffswitch7');

  layoutSub: Subscription;

  body = document.querySelector('body');

  @ViewChild('switcher', { static: false }) switcher!: ElementRef;
  constructor(
    public renderer: Renderer2,
    public switcherServic: SwitcherService,
    public navServices: NavService,

  ) {
    this.layoutSub = switcherServic.changeEmitted.subscribe((value) => {
      // console.log(value);
      
      if (value) {
        this.renderer.addClass(this.switcher.nativeElement.firstElementChild,'active');
        this.renderer.setStyle(this.switcher.nativeElement.firstElementChild,'right','0px');
        value = true;
      } else {
        this.renderer.removeClass(this.switcher.nativeElement.firstElementChild,'active');
        this.renderer.setStyle(this.switcher.nativeElement.firstElementChild,'right','-270px');
        value = false;
      }
    });
  }
  ngOnInit(): void {
    switcher.localStorageBackUp();
    switcher.customClickFn();
    switcher.updateChanges();
    switcher.checkOptions();
  }
  reset(){
  let lightBtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
  sessionStorage.clear()
    sessionStorage.clear(); 
    let html:any = document.querySelector('html')
    let body = document.querySelector('body')
    html.style = ''; 
    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('layout-boxed');
    body?.classList.remove('scrollable-layout');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    body?.classList.remove("body-style1");
    body?.classList.remove("horizontal");
    body?.classList.remove("rtl");
    lightBtn.checked = true
    html?.setAttribute('dir', 'ltr');
    document.querySelector('#style')?.setAttribute( 'href', './assets/bootstrap/bootstrap.css');
    sidebarFn.checkHoriMenu();
    body?.classList.add("sidebar-mini");
    document.querySelector(".app-sidebar")?.classList.remove("horizontal-main");
    document.querySelector(".main-sidemenu")?.classList.remove("container");
    document.querySelector(".main-content")?.classList.remove("horizontal-content");
    document.querySelector(".main-content")?.classList.add("app-content");
    document.querySelectorAll('.main-container').forEach((e,i)=>{
      e?.classList.add('container-fluid');
    });
    document.querySelectorAll('.main-container').forEach((e,i)=>{
      e?.classList.remove('container');
    });
    document.querySelector('.main-header')?.classList.add('side-header');
    document.querySelector('.main-header')?.classList.remove('hor-header');
    body?.classList.remove("leftbgimage1","leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5");
    switcher.updateChanges();
    switcher.checkOptions();
    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();
    
    document.querySelector('html')?.style.setProperty('--primary-bg-color', primaryColorVal);
  
  }

  public color1: string = '#F7435C !important';
  public color2: string = '#F7435C !important';
  public color3: string = '#F7435C !important';
  public color4: string = '#F7435C !important';
  public color5: string = '#F7435C !important';

  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;

    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');

    switcher.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
    
    sessionStorage.setItem('valexlight-primary-color', this.color1);
    sessionStorage.setItem('valexlight-primary-hover', this.color1);
    sessionStorage.setItem('valexlight-primary-border', this.color1);
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    // Adding
    this.body?.classList.add('light-theme');
    sessionStorage.setItem('valexLightTheme', 'true');
    
    // removing
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexTransparentTheme');
    this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('transparent-theme');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');
    
    sessionStorage.removeItem('valexdark-primary-color');
    sessionStorage.removeItem('valextransparent-primary-color');
    sessionStorage.removeItem('valextransparent-bg-color');
    sessionStorage.removeItem('valextransparent-bgImg-primary-color');
    sessionStorage.removeItem('valexBgImage');
    switcher.checkOptions();
    switcher.updateChanges();
  }
  public dynamicDarkPrimary(data: any): void {
    this.color2 = data.color;

    const dynamicPrimaryDark = document.querySelectorAll('input.color-primary-dark');

    switcher.dynamicDarkPrimaryColor(dynamicPrimaryDark, this.color2);
    
    sessionStorage.setItem('valexdark-primary-color', this.color2);
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    // Adding
    this.body?.classList.add('dark-theme');
    sessionStorage.setItem('valexDarkTheme', 'true');
    
    // removing
    sessionStorage.removeItem('valexLightTheme');
    sessionStorage.removeItem('valexTransparentTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('transparent-theme');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');    
    
    sessionStorage.removeItem('valexlight-primary-color');
    sessionStorage.removeItem('valexlight-primary-hover');
    sessionStorage.removeItem('valexlight-primary-border');
    sessionStorage.removeItem('valextransparent-primary-color');
    sessionStorage.removeItem('valextransparent-bg-color');
    sessionStorage.removeItem('valextransparent-bgImg-primary-color');
    sessionStorage.removeItem('valexBgImage');
    switcher.checkOptions();
    switcher.updateChanges();
  }
  public dynamicTranparentPrimary(data: any): void {
    this.color3 = data.color;

    const dynamicPrimaryTrasnsparent = document.querySelectorAll('input.color-primary-transparent');

    switcher.dynamicTrasnsparentPrimaryColor(
      dynamicPrimaryTrasnsparent,
      this.color3
    );
    sessionStorage.setItem('valextransparent-primary-color', this.color3);
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;

    // Adding
    this.body?.classList.add('transparent-theme');
    sessionStorage.setItem('valexTransparentTheme', 'true');
    
    // Removing
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4'); 
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');   

    sessionStorage.removeItem('valexlight-primary-color');
    sessionStorage.removeItem('valexlight-primary-hover');
    sessionStorage.removeItem('valexlight-primary-border');
    sessionStorage.removeItem('valexdark-primary-color');
    sessionStorage.removeItem('valextransparent-bg-color');
    sessionStorage.removeItem('valextransparent-bgImg-primary-color');
    sessionStorage.removeItem('valexBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
  public dynamicTranparentBgPrimary(data: any): void {
    this.color4 = data.color;

    const dynamicPrimaryBgTrasnsparent = document.querySelectorAll('input.color-bg-transparent');

    switcher.dynamicBgTrasnsparentPrimaryColor(
      dynamicPrimaryBgTrasnsparent,
      this.color4
    );
    sessionStorage.setItem('valextransparent-bg-color', this.color4);
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    

    // Adding
    this.body?.classList.add('transparent-theme');
    sessionStorage.setItem('valexTransparentTheme', 'true');
    
    // Removing
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4'); 
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    sessionStorage.removeItem('valexlight-primary-color');
    sessionStorage.removeItem('valexlight-primary-hover');
    sessionStorage.removeItem('valexlight-primary-border');
    sessionStorage.removeItem('valexdark-primary-color');
    sessionStorage.removeItem('valextransparent-bgImg-primary-color');
    sessionStorage.removeItem('valexBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
  public dynamicTranparentImgPrimary(data: any): void {
    this.color5 = data.color;

    const dynamicPrimaryBgImgTrasnsparent = document.querySelectorAll('input.color-primary-transparent-img');

    switcher.dynamicBgImgTrasnsparentPrimaryColor(
      dynamicPrimaryBgImgTrasnsparent,
      this.color5
    );
    
    sessionStorage.setItem('valextransparent-bgImg-primary-color', this.color5);
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;

    if (
      document.querySelector('body')?.classList.contains('bg-img1') == false &&
      document.querySelector('body')?.classList.contains('bg-img2') == false &&
      document.querySelector('body')?.classList.contains('bg-img3') == false &&
      document.querySelector('body')?.classList.contains('bg-img4') == false
    ) {
      document.querySelector('body')?.classList.add('bg-img1');
      sessionStorage.setItem('valexBgImage', 'bg-img1');
    }
    // Adding
    this.body?.classList.add('transparent-theme');
    sessionStorage.setItem('valexTransparentTheme', 'true');
    
    // Removing
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('dark-theme'); 
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    sessionStorage.removeItem('valexlight-primary-color');
    sessionStorage.removeItem('valexlight-primary-hover');
    sessionStorage.removeItem('valexlight-primary-border');
    sessionStorage.removeItem('valexdark-primary-color');
    sessionStorage.removeItem('valextransparent-primary-color');
    sessionStorage.removeItem('valextransparent-bg-color');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }

  bgImage(e: any) {
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;

    let img = e.parentElement.classList[0];
    sessionStorage.setItem('valexBgImage', img);
    // this.body?.classList.add(img);
    let allImg = document.querySelectorAll('.bg-img');
    allImg.forEach((el, i) => {
      let ele = el.classList[0];
      this.body?.classList.remove(ele);
      this.body?.classList.add(img);
    });

    // Adding
    this.body?.classList.add('transparent-theme');
    sessionStorage.setItem('valexTransparentTheme', 'true');
    
    // Removing
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('dark-theme'); 
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    sessionStorage.removeItem('valexlight-primary-color');
    sessionStorage.removeItem('valexlight-primary-hover');
    sessionStorage.removeItem('valexlight-primary-border');
    sessionStorage.removeItem('valexdark-primary-color');
    sessionStorage.removeItem('valextransparent-primary-color');
    sessionStorage.removeItem('valextransparent-bg-color');
    switcher.removeForTransparent();
    switcher.updateChanges();
    
  }

 

  leftmenuBg(image:any){
    switch (image) {
      case "leftbgimage1":
        document.body.classList.add("leftbgimage1")
        document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5")
        break;
        
      case "leftbgimage2":
        document.body.classList.add("leftbgimage2")
        document.body.classList.remove("leftbgimage1","leftbgimage3","leftbgimage4","leftbgimage5")
        break;

      case "leftbgimage3":
        document.body.classList.add("leftbgimage3")
        document.body.classList.remove("leftbgimage2","leftbgimage1","leftbgimage4","leftbgimage5")
        break;

      case "leftbgimage4":
        document.body.classList.add("leftbgimage4")
        document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage1","leftbgimage5")
        break;

      case "leftbgimage5":
        document.body.classList.add("leftbgimage5")
        document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage1")
        break;

      default:
        document.body.classList.add("leftbgimage1")
        document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5");
        break;
    }
  }

  defaultBody(){
    document.body.classList.remove("body-style1")
  }
  
  bodyStyle(){
    document.body.classList.add("body-style1")
  }

  Horizantal(){
    // localStorage.clear()
    sessionStorage.removeItem('ValexHorizantalHover')
    sessionStorage.setItem("ValexHorizantal","true")
    // document.querySelector(".badgeDisplayShow")?.classList.add("badgedisplay")
    
  }
  VerticalMenu(){
    // localStorage.clear()
    sessionStorage.removeItem('ValexHorizantalHover')
    sessionStorage.removeItem('ValexHorizantal')

  }
  HorizantalHover(){
    // localStorage.clear()
    sessionStorage.setItem("ValexHorizantalHover","true")
    sessionStorage.removeItem('ValexHorizantal')

  }

  RTL(){
    document.body.classList.add("rtl")
    document.body.classList.remove("ltr")
    sessionStorage.removeItem("ltr")
    sessionStorage.setItem("Rtl","true")
  }

  LTR(){
    document.body.classList.add("ltr")
    document.body.classList.remove("rtl")
    sessionStorage.removeItem("Rtl")
    sessionStorage.setItem("ltr","true")
  }

}

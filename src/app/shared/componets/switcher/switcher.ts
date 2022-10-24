import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidemenu/sidemenu'

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body = document.querySelector('body');
  if (sessionStorage.getItem('valexlight-primary-color') !== null) {
    body?.classList.add('light-theme');
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('valexlight-primary-color'));
    html?.setProperty('--primary-bg-hover',sessionStorage.getItem('valexlight-primary-color'));
    html?.setProperty('--primary-bg-border',sessionStorage.getItem('valexlight-primary-color'));
  }
  if (sessionStorage.getItem("Rtl") !== null){
    document.body.classList.add("rtl")
    document.body.classList.remove("ltr")
  }
  if (sessionStorage.getItem("ltr") !== null){
    document.body.classList.add("ltr")
    document.body.classList.remove("rtl")
  }
  if (sessionStorage.getItem('valexdark-primary-color') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    
    body?.classList.remove('light-theme');
    body?.classList.remove('transparent-theme');

    html?.setProperty('--primary-bg-color',sessionStorage.getItem('valexdark-primary-color'));
    html?.setProperty('--primary-bg-hover',sessionStorage.getItem('valexdark-primary-color'));
    html?.setProperty('--primary-bg-border',sessionStorage.getItem('valexdark-primary-color'));
  }
  if (sessionStorage.getItem('valextransparent-primary-color') !== null) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('valextransparent-primary-color'));
  }
  if (sessionStorage.getItem('valextransparent-bg-color') !== null) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    html?.setProperty('--transparent-body',sessionStorage.getItem('valextransparent-bg-color'));
  }
  if (sessionStorage.getItem('valextransparent-bgImg-primary-color') !== null || sessionStorage.getItem('valexBgImage') !== null) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    let img:any = sessionStorage.getItem('valexBgImage');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('valextransparent-bgImg-primary-color'));
    body?.classList.add(img);
  }
  if (sessionStorage.getItem('valexLightTheme') !== null ) {
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');
  }
  if (sessionStorage.getItem('valexDarkTheme') !== null ) {
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    body?.classList.add('dark-theme');

    body?.classList.remove('light-theme');
    body?.classList.remove('transparent-theme');
  }
  if (sessionStorage.getItem('valexTransparentTheme') !== null ) {
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    body?.classList.add('transparent-theme');

    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
  }
  if(sessionStorage.getItem('ValexHorizantal') !== null){
    let horizontal = document.getElementById('myonoffswitch35') as HTMLInputElement
    horizontal.checked = true;
    let mainContent: any = document.querySelector('.main-content');
    let mainContainer: any = document.querySelectorAll('.main-container');
    let appSidebar: any = document.querySelector('.app-sidebar');
    let header: any = document.querySelector('.header');
    let mainSidemenu: any = document.querySelector('.main-sidemenu');
    let sideMenu: any = document.querySelector('.horizontal .side-menu');
    document.querySelector(".main-header")?.classList.add("hor-header")
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e,i)=>{
      e.classList.add('container')
    })
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e.classList.remove('container-fluid')
    })
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();     
    setTimeout(()=>{
      sidebarFn.parentNavActive();    
    }, 300) 
    
  }
  if(sessionStorage.getItem('ValexHorizantalHover') !== null){
    let horizontalHover = document.getElementById('myonoffswitch111') as HTMLInputElement;
    horizontalHover.checked = true;
    let mainContent: any = document.querySelector('.main-content');
    let mainContainer: any = document.querySelectorAll('.main-container');
    let appSidebar: any = document.querySelector('.app-sidebar');
    let header: any = document.querySelector('.header');
    let mainSidemenu: any = document.querySelector('.main-sidemenu');
    let sideMenu: any = document.querySelector('.horizontal .side-menu');
    document.querySelector(".main-header")?.classList.add("hor-header")
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e,i)=>{
      e.classList.add('container')
    })
    console.log(mainContainer);
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-wrap');
    // remove
    sideMenu?.classList.remove('flex-nowrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e.classList.remove('container-fluid')
    })
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    setTimeout(()=>{
      sidebarFn.parentNavActive();    
    }, 300)    
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
      const cssPropName = `--primary-${item.getAttribute('data-id')}`;
      const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
      const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTrasnsparentPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--transparent-${item.getAttribute('data-id5')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

export function customClickFn() { 
  let body = document.querySelector('body');
  let html = document.querySelector('html');
  let ltr = document.querySelectorAll('#myonoffswitch54');
  let rtl = document.querySelectorAll('#myonoffswitch55');
  let vertical = document.querySelectorAll('#myonoffswitch34');
  let horizontal = document.querySelectorAll('#myonoffswitch35');
  let horizontalHover = document.querySelectorAll('#myonoffswitch111');
  let defaultTheme: any = document.querySelector('#myonoffswitch9');
  let boxed: any = document.querySelector('#myonoffswitch10');
  let fixedLayout: any = document.querySelector('#myonoffswitch11');
  let scrollableLayout: any = document.querySelector('#myonoffswitch12');
  let mainContent = document.querySelector('.main-content');
  let mainContainer = document.querySelectorAll('.main-container');
  let mainHeader = document.querySelector('.main-header');
  let appSidebar = document.querySelector('.app-sidebar');
  let mainSidemenu = document.querySelector('.main-sidemenu');
  let lightBtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
  let darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
  let TransparentBtn = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
  let sideMenu = document.querySelector('.horizontal .side-menu');
  let lightMenu: any = document.querySelector('#myonoffswitch3');
  let colorMenu: any = document.querySelector('#myonoffswitch4');
  let darkMenu: any = document.querySelector('#myonoffswitch5');
  let gradientMenu: any = document.querySelector('#myonoffswitch25');
  let lightHeader: any = document.querySelector('#myonoffswitch6');
  let darkHeader: any = document.querySelector('#myonoffswitch8');
  let gradientHeader: any = document.querySelector('#myonoffswitch26');
  let colorHeader: any = document.querySelector('#myonoffswitch7');

  let styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute( 'href', './assets/bootstrap/bootstrap.css');
    //remove
    body?.classList.remove('rtl');
    sidebarFn.checkHoriMenu();
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute('href','./assets/bootstrap/bootstrap.rtl.css');
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    //add
    mainContent?.classList.add('app-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container-fluid');
    })
    mainHeader?.classList.add('side-header');
    body?.classList.add('sidebar-mini');
    //remove
    body?.classList.remove('horizontal');
    body?.classList.remove('horizontal-hover');
    mainContent?.classList.remove('horizontal-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container');
    })
    mainHeader?.classList.remove('hor-header');
    appSidebar?.classList.remove('horizontal-main');
    mainSidemenu?.classList.remove('container');

    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    // localStorage.setItem("ValexHorizantal","true")
  });
  fromEvent(horizontal, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container');
    })
    mainHeader?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');

    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container-fluid');
    })

    mainHeader?.classList.remove('side-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();

  });
  fromEvent(horizontalHover, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('horizontal-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container');
    })
    mainHeader?.classList.add('hor-header');
    mainHeader?.classList.remove('side-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-wrap');
    // remove
    sideMenu?.classList.remove('flex-nowrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container-fluid');
    })
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('closed-menu');
    body?.classList.remove('hover-submenu');
    body?.classList.remove('hover-submenu1');
    body?.classList.remove('icontext-menu');
    body?.classList.remove('sideicon-menu');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    
    sidebarFn.checkHoriMenu();
  });
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    lightBtn.checked = true;
    document.documentElement.style.setProperty('--primary-bg-color', 'var(--primary)');
    document.documentElement.style.setProperty('--primary02', 'var(--primary)');
    document.documentElement.style.setProperty('--primary0', 'var(--primary)');
    // add
    document.querySelector('body')?.classList.add('light-theme');
    sessionStorage.setItem('valexLightTheme', 'true');
    // remove
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexTransparentTheme');
    document.querySelector('body')?.classList.remove('dark-theme');
    document.querySelector('body')?.classList.remove('transparent-theme');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    lightMenu.checked = true
    colorMenu.checked = false
    darkMenu.checked = false
    gradientMenu.checked = false
    lightHeader.checked = true
    darkHeader.checked = false
    gradientHeader.checked = false
    colorHeader.checked = false
  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    darkBtn.checked = true;
    document.documentElement.style.setProperty('--primary-bg-color', 'var(--primary)');
    document.documentElement.style.setProperty('--primary02', 'var(--primary)');
    document.documentElement.style.setProperty('--primary0', 'var(--primary)');
    // add
    document.querySelector('body')?.classList.add('dark-theme');
    
    sessionStorage.setItem('valexDarkTheme', 'true');
    // remove
    sessionStorage.removeItem('valexLightTheme');
    sessionStorage.removeItem('valexTransparentTheme');
    document.querySelector('body')?.classList.remove('light-theme');
    document.querySelector('body')?.classList.remove('transparent-theme');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    lightMenu.checked = false
    colorMenu.checked = false
    darkMenu.checked = true
    gradientMenu.checked = false
    lightHeader.checked = true
    darkHeader.checked = true
    gradientHeader.checked = false
    colorHeader.checked = false
  });
  fromEvent(TransparentBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    // console.log("transparent");
    document.documentElement.style.setProperty('--primary-bg-color', 'var(--primary)');
    document.documentElement.style.setProperty('--primary02', 'var(--primary)');
    document.documentElement.style.setProperty('--primary0', 'var(--primary)');
    TransparentBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('transparent-theme');
    sessionStorage.setItem('valexTransparentTheme', 'true');
    // remove
    sessionStorage.removeItem('valexDarkTheme');
    sessionStorage.removeItem('valexLightTheme');
    document.querySelector('body')?.classList.remove('light-theme');
    document.querySelector('body')?.classList.remove('dark-theme');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
    lightMenu.checked = false
    colorMenu.checked = false
    darkMenu.checked = false
    gradientMenu.checked = false
    lightHeader.checked = false
    darkHeader.checked = false
    gradientHeader.checked = false
    colorHeader.checked = false
  });
  // layout width  style
  fromEvent(defaultTheme, 'click').subscribe(() => {
    body?.classList.add('layout-fullwidth');
    body?.classList.remove('layout-boxed');
    sidebarFn.checkHoriMenu();
    // sidebarFn.checkDropdown()
  });
  fromEvent(boxed, 'click').subscribe(() => {
    body?.classList.add('layout-boxed');
    body?.classList.remove('layout-fullwidth');
    sidebarFn.checkHoriMenu();
  });
  // layout position
  fromEvent(fixedLayout, 'click').subscribe(() => {
    body?.classList.add('fixed-layout');
    body?.classList.remove('scrollable-layout');
  });
  fromEvent(scrollableLayout, 'click').subscribe(() => {
    body?.classList.add('scrollable-layout');
    body?.classList.remove('fixed-layout');
  });
  // menu
  fromEvent(lightMenu, 'click').subscribe(() => {
    body?.classList.add('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(colorMenu, 'click').subscribe(() => {
    body?.classList.add('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(darkMenu, 'click').subscribe(() => {
    body?.classList.add('dark-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(gradientMenu, 'click').subscribe(() => {
    body?.classList.add('gradient-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
  });
  // header
  fromEvent(lightHeader, 'click').subscribe(() => {
    body?.classList.add('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
  });
  fromEvent(darkHeader, 'click').subscribe(() => {
    body?.classList.add('dark-header');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
  });
  fromEvent(colorHeader, 'click').subscribe(() => {
    body?.classList.add('color-header');
    body?.classList.remove('light-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
  });
  fromEvent(gradientHeader, 'click').subscribe(() => {
    body?.classList.add('gradient-header');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('dark-header');
  });
}


export function removeForTransparent(){
	if( document.querySelector('body')?.classList.contains('header-light')){
        document.querySelector('body')?.classList.remove('header-light')
    }
    // color header 
    if(document.querySelector('body')?.classList.contains('color-header')){
        document.querySelector('body')?.classList.remove('color-header')
    }
    // gradient header 
    if(document.querySelector('body')?.classList.contains('gradient-header')){
        document.querySelector('body')?.classList.remove('gradient-header')
    }
    // dark header 
    if(document.querySelector('body')?.classList.contains('dark-header')){
        document.querySelector('body')?.classList.remove('dark-header')
    }

    // light menu
    if(document.querySelector('body')?.classList.contains('light-menu')){
        document.querySelector('body')?.classList.remove('light-menu')
    }
    // color menu
    if(document.querySelector('body')?.classList.contains('color-menu')){
        document.querySelector('body')?.classList.remove('color-menu')
    }
    // gradient menu
    if(document.querySelector('body')?.classList.contains('gradient-menu')) {
        document.querySelector('body')?.classList.remove('gradient-menu')
    }
    // dark menu
    if(document.querySelector('body')?.classList.contains('dark-menu')) {
        document.querySelector('body')?.classList.remove('dark-menu')
    }
}

export function checkOptions(){
  // light header 
  if( document.querySelector('body')?.classList.contains('header-light')){
    let lightheader = document.getElementById('myonoffswitch6') as HTMLInputElement;
    lightheader.checked = true;
  }
  // color header 
  if(document.querySelector('body')?.classList.contains('color-header')){
    let colorheader = document.getElementById('myonoffswitch7') as HTMLInputElement;
    colorheader.checked = true;
  }
  // gradient header 
  if(document.querySelector('body')?.classList.contains('gradient-header')){
    let gradientheader = document.getElementById('myonoffswitch26') as HTMLInputElement;
    gradientheader.checked = true;
  }
  // dark header 
  if(document.querySelector('body')?.classList.contains('dark-header')){
    let darkheader  = document.getElementById('myonoffswitch8') as HTMLInputElement;
    darkheader.checked = true;
  }

  // light menu
  if(document.querySelector('body')?.classList.contains('light-menu')){
    let lightmenu = document.getElementById('myonoffswitch3') as HTMLInputElement;
    lightmenu.checked = true;
  }
  // color menu
  if(document.querySelector('body')?.classList.contains('color-menu')){
    let colormenu = document.getElementById('myonoffswitch4') as HTMLInputElement;
    colormenu.checked = true;
  }
  // gradient menu
  if(document.querySelector('body')?.classList.contains('gradient-menu')) {
    let gradientmenu = document.getElementById('myonoffswitch25') as HTMLInputElement;
    gradientmenu.checked = true;
  }
  // dark menu
  if(document.querySelector('body')?.classList.contains('dark-menu')) {
    let darkmenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkmenu.checked = true;
  }
  //Rtl
  if(document.querySelector('body')?.classList.contains('rtl')) {
    let RTL = document.getElementById('myonoffswitch55') as HTMLInputElement;
    RTL.checked = true;
  }

  // horizontal
  if(document.querySelector('body')?.classList.contains('horizontal')) {
    let horizontal = document.getElementById('myonoffswitch35') as HTMLInputElement;
    horizontal.checked = true;
  }

  // horizontal-hover
  if(document.querySelector('body')?.classList.contains('horizontal-hover')) {
    let horizontalhover = document.getElementById('myonoffswitch111') as HTMLInputElement;
    horizontalhover.checked = true;
  }


}

let myVarVal;
export function updateChanges(){ 
  let lightMenu: any = document.querySelector('#myonoffswitch3');
  let colorMenu: any = document.querySelector('#myonoffswitch4');
  let darkMenu: any = document.querySelector('#myonoffswitch5');
  let gradientMenu: any = document.querySelector('#myonoffswitch25');
  let lightHeader: any = document.querySelector('#myonoffswitch6');
  let darkHeader: any = document.querySelector('#myonoffswitch8');
  let gradientHeader: any = document.querySelector('#myonoffswitch26');
  let colorHeader: any = document.querySelector('#myonoffswitch7');
  let ltr:any = document.getElementById('myonoffswitch54');
  let rtl:any = document.querySelectorAll('#myonoffswitch55');
  let vertical:any = document.getElementById('myonoffswitch34');
  let DefaultBody:any = document.getElementById('myonoffswitch07');
  let FullWidth:any = document.getElementById('myonoffswitch9');
  let Fixed:any = document.getElementById('myonoffswitch11');
  
  let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();
  
  //get variable
	myVarVal  =  sessionStorage.getItem("light-primary-color") || sessionStorage.getItem("dark-primary-color") || sessionStorage.getItem("transparent-primary-color") || sessionStorage.getItem("transparent-bgImg-primary-color") || primaryColorVal;
	document.querySelector('html')?.style.setProperty('--primary-bg-color', myVarVal);

  let colorData1 = hexToRgba(myVarVal, 0.2)  
	document.querySelector('html')?.style.setProperty('--primary02', colorData1);

	let colorData2 = hexToRgba(myVarVal, 0.5)
	document.querySelector('html')?.style.setProperty('--primary05', colorData2);

    lightMenu.checked = false
    colorMenu.checked = false
    darkMenu.checked = false
    gradientMenu.checked = false
    lightHeader.checked = false
    darkHeader.checked = false
    gradientHeader.checked = false
    colorHeader.checked = false
    rtl.checked = false
    ltr.checked = true
    vertical.checked = true
    DefaultBody.checked = true
    FullWidth.checked = true
    Fixed.checked = true

}




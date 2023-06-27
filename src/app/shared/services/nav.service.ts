import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
    headTitle?: string;
    title?: string;
    path?: string;
    icon?: string;
    type?: string;
    badgeClass?: string;
    badgeValue?: string;
    active?: boolean;
    children?: Menu[];
    Menusub?: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class NavService implements OnDestroy {

    private unsubscriber: Subject<any> = new Subject();
    public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

    public megaMenu: boolean = false;
    public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
    public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

    constructor(
        private router: Router
    ) {
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, 'resize').pipe(
            debounceTime(1000),
            takeUntil(this.unsubscriber)
        ).subscribe((evt: any) => {
            this.setScreenWidth(evt.target.innerWidth);
            if (evt.target.innerwidth < 991) {
                this.collapseSidebar = false;
                this.megaMenu = false;
            }

            if (evt.target.innerWidth < 1199) {
                this.megaMenuCollapse = true;
            }
        });
        if (window.innerWidth < 991) {
            this.router.events.subscribe(event => {
                this.collapseSidebar = false;
                this.megaMenu = false;
            })
        }
    }

    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }

    ngOnDestroy() {
        this.unsubscriber.next(true);
        this.unsubscriber.complete();
    }

    MENUITEMS: Menu[] = [
        {
            path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'dashboard', badgeClass: 'success', active: true,
        },
        {
            headTitle: 'Transacciones'
        },
        {
            path: '/balance-withdrawal', title: 'Retiro de saldo', type: 'link', icon: 'send', badgeClass: 'success', active: true,
        },
        {
            path: '/transaction-history', title: 'Historial de transacciones', type: 'link', icon: 'notes', badgeClass: 'success', active: true,
        },
        {
            path: '/withdrawal-history', title: 'Historial de retiros', type: 'link', icon: 'sort', badgeClass: 'success', active: true,
        },
        {
            headTitle: 'Herramientas'
        },

        {
            path: '/datafono-digital', title: 'Datáfono digital', type: 'link', icon: 'credit_card', badgeClass: 'success', active: true,
        },
        {
            path: '/payment-link', title: 'Link de pago', type: 'link', icon: 'share', badgeClass: 'success', active: true,
        },
        {
          path: '/link-sub', title: 'Link de Suscripciones ', type: 'link', icon: 'share', badgeClass: 'success', active: true,
        },
        // {
        //     headTitle: 'General'
        // },
        // {
        //     title: 'Icons', icon: 'sentiment_satisfied_alt', type: 'sub', active: false, children: [
        //         { path: '/icon/fornt-awesome', title: 'Fornt Awesome', type: 'link', active: false },
        //         { path: '/icon/material-design-icons', title: 'Material design Icons', type: 'link', active: false },
        //         { path: '/icon/simple-line-icons', title: 'Simple Line Icons', type: 'link', active: false },
        //         { path: '/icon/feather-icons', title: 'Feather Icons', type: 'link', active: false },
        //         { path: '/icon/ionic-icons', title: 'Ionic Icons', type: 'link', active: false },
        //         { path: '/icon/flag-icons', title: 'Flag Icons', type: 'link', active: false },
        //         { path: '/icon/pe7-icons', title: 'Pe7 Icons', type: 'link', active: false },
        //         { path: '/icon/themify-icons', title: 'Themify Icons', type: 'link', active: false },
        //         { path: '/icon/typicons-icons', title: 'Typicons Icons', type: 'link', active: false },
        //         { path: '/icon/weather-icons', title: 'Weather Icons', type: 'link', active: false },
        //         { path: '/icon/material-icons', title: 'Material Icons', type: 'link', active: false },
        //         { path: '/icon/bootstrap-icons', title: 'Bootstrap Icons', type: 'link', active: false },
        //     ]
        // },
        // {
        //   path: '/icons', title: 'Icons', type: 'link', icon: 'sentiment_satisfied_alt', badgeClass: 'danger', badgeValue: 'New', active: false
        // },
        // {
        //     title: 'Charts', icon: 'assessment', type: 'sub', active: false,
        //     children: [
        //         { path: '/charts/apex', title: 'Apex Chart', type: 'link', active: false },
        //         { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link', active: false },
        //         { path: '/charts/chartlist', title: 'Chartlist Chart', type: 'link', active: false },
        //         { path: '/charts/echarts', title: 'Echart Chart', type: 'link', active: false },

        //     ]
        // },
        // {
        //   title: 'Ecommerce', icon: 'shopping_basket', type: 'sub', active: false,
        //   children: [
        //     { path: '/ecommerce/products', title: 'Products', type: 'link', active: false },
        //     { path: '/ecommerce/products-details', title: 'Product-Details', type: 'link', active: false },
        //     { path: '/ecommerce/cart', title: 'Cart', type: 'link', active: false },

        //   ]
        // },
        // {
        //     headTitle: 'WEB APPS'
        // },
        // {
        //     title: 'Apps', icon: 'tonality', type: 'sub', active: false,
        //     children: [
        //         { path: '/apps/cards', title: 'Cards', type: 'link', active: false },
        //         { path: '/apps/darggablecards', title: 'Darggablecards', type: 'link', active: false },
        //         { path: '/apps/rangeslider', title: 'Range-slider', type: 'link', active: false },
        //         { path: '/apps/calendar', title: 'Calendar', type: 'link', active: false },
        //         { path: '/apps/contacts', title: 'Contacts', type: 'link', active: false },
        //         { path: '/apps/image-compare', title: 'image-compare', type: 'link', active: false },
        //         { path: '/apps/notification', title: 'Notification', type: 'link', active: false },
        //         { path: '/apps/widgetnotification', title: 'Widget-notification', type: 'link', active: false },
        //         { path: '/apps/treeview', title: 'Treeview', type: 'link', active: false },
        //         {
        //             title: 'File-manager', type: 'sub', active: false, children: [
        //                 { path: '/apps/file-manager/file-manager', title: 'File-Manager', type: 'link', active: false },
        //                 { path: '/apps/file-manager/file-manager-list', title: 'File-Manager-List', type: 'link', active: false },
        //                 { path: '/apps/file-manager/file-manager-details', title: 'File-Manager-Details', type: 'link', active: false },
        //                 { path: '/apps/file-manager/file-attachments', title: 'File-Attachments', type: 'link', active: false },

        //             ]
        //         }
        //     ]
        // },
        // {
        //     title: 'Elements', icon: 'layers', type: 'sub', active: false,
        //     children: [
        //         { path: '/elements/alerts', title: 'Alerts', type: 'link', active: false },
        //         { path: '/elements/avatar', title: 'Avatar', type: 'link', active: false },
        //         { path: '/elements/breadcrumbs', title: 'Breadcrumbs', type: 'link', active: false },
        //         { path: '/elements/buttons', title: 'Buttons', type: 'link', active: false },
        //         { path: '/elements/badge', title: 'Badge', type: 'link', active: false },
        //         { path: '/elements/dropdown', title: 'Dropdown', type: 'link', active: false },
        //         { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link', active: false },
        //         { path: '/elements/listgroup', title: 'List Group', type: 'link', active: false },
        //         { path: '/elements/navigation', title: 'Navigation', type: 'link', active: false },
        //         { path: '/elements/images', title: 'Images', type: 'link', active: false },
        //         { path: '/elements/pagination', title: 'Pagination', type: 'link', active: false },
        //         { path: '/elements/popover', title: 'Popover', type: 'link', active: false },
        //         { path: '/elements/progress', title: 'Progress', type: 'link', active: false },
        //         { path: '/elements/spinners', title: 'Spinners', type: 'link', active: false },
        //         { path: '/elements/mediaobject', title: 'Media Object', type: 'link', active: false },
        //         { path: '/elements/typography', title: 'Typography', type: 'link', active: false },
        //         { path: '/elements/tooltip', title: 'Tooltip', type: 'link', active: false },
        //         { path: '/elements/toast', title: 'Toast', type: 'link', active: false },
        //         { path: '/elements/tags', title: 'Tags', type: 'link', active: false },
        //         { path: '/elements/tabs', title: 'Tabs', type: 'link', active: false },
        //         { path: '/elements/scrollspy', title: 'Scrollspy', type: 'link', active: false },
        //     ]
        // },
        // {
        //     title: 'Advanced UI', icon: 'palette', type: 'sub', active: false,
        //     children: [
        //         { path: '/advanced/accordion', title: 'Accordion', type: 'link', active: false },
        //         { path: '/advanced/carousel', title: 'Carousel', type: 'link', active: false },
        //         { path: '/advanced/collapse', title: 'Collapse', type: 'link', active: false },
        //         { path: '/advanced/modals', title: 'Modals', type: 'link', active: false },
        //         { path: '/advanced/timeline', title: 'Timeline', type: 'link', active: false },
        //         { path: '/advanced/sweet-alert', title: 'Sweet Alert', type: 'link', active: false },
        //         { path: '/advanced/ratings', title: 'Ratings', type: 'link', active: false },
        //         { path: '/advanced/counters', title: 'Counters', type: 'link', active: false },
        //         { path: '/advanced/search', title: 'Search', type: 'link', active: false },
        //         { path: '/advanced/userlist', title: 'Userlist', type: 'link', active: false },
        //         {
        //             title: 'Blog-pages', type: 'sub', active: false, children: [
        //                 { path: '/advanced/blog', title: 'Blog', type: 'link', active: false },
        //                 { path: '/advanced/blog-details', title: 'Blog-Details', type: 'link', active: false },
        //                 { path: '/advanced/blog-edit', title: 'Blog-Edit', type: 'link', active: false },

        //             ]
        //         }
        //     ]
        // },
        // {
        //     headTitle: 'MULTI LEVELS'
        // },
        // {
        //     title: 'Menu-levels', icon: 'dns', type: 'sub', active: false,
        //     children: [
        //         { title: 'Level-1', path: "", type: 'link', active: false },
        //         {
        //             title: 'Level-2', type: 'sub', active: false, children: [
        //                 { path: '', title: 'Level-2.1', type: 'link', active: false },
        //                 { path: '', title: 'Level-2.2', type: 'link', active: false },
        //                 {
        //                     title: 'Level-2.3', type: 'sub', active: false, children: [
        //                         { path: '', title: 'Level-2.3.1', type: 'link', active: false },
        //                         { path: '', title: 'Level-2.3.2', type: 'link', active: false },
        //                         { path: '', title: 'Level-2.3.3', type: 'link', active: false },

        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     headTitle: 'COMPONENTS'
        // },
        // {
        //     title: 'Mail', icon: 'question_answer', type: 'sub', active: false,
        //     children: [
        //         { path: '/mail/mail', title: 'Mail', type: 'link', active: false },
        //         { path: '/mail/mail-compose', title: 'Mail Compose', type: 'link', active: false },
        //         { path: '/mail/read-mail', title: 'Read-mail', type: 'link', active: false },
        //         { path: '/mail/mail-settings', title: 'Mail-settings', type: 'link', active: false },
        //         { path: '/mail/chat', title: 'Chat', type: 'link', active: false },
        //     ]
        // },
        // {
        //     title: 'Form', icon: 'description', type: 'sub', active: false,
        //     children: [
        //         { path: '/form/form-elements', title: 'Form Elements', type: 'link', active: false },
        //         { path: '/form/advanced-form', title: 'Advanced Forms', type: 'link', active: false },
        //         { path: '/form/form-layouts', title: 'Form Layouts', type: 'link', active: false },
        //         { path: '/form/form-validation', title: 'Form Validation', type: 'link', active: false },
        //         { path: '/form/form-wizards', title: 'Form Wizards', type: 'link', active: false },
        //         { path: '/form/form-editors', title: 'WYSIWYG Editer', type: 'link', active: false },
        //         { path: '/form/form-sizes', title: 'Form-Sizes', type: 'link', active: false },
        //     ]
        // },
        // {
        //     title: 'Tables', icon: 'table_chart', type: 'sub', active: false,
        //     children: [
        //         { path: '/tables/basictables', title: 'Basic Tables', type: 'link', active: false },
        //         { path: '/tables/datatables', title: 'Data Tables', type: 'link', active: false },
        //         { path: '/tables/edittables', title: 'Edit Tables', type: 'link', active: false },
        //     ]
        // },
        // {
        //     path: '/widgets', title: 'Widgets', type: 'link', icon: 'widgets', badgeClass: 'warning', badgeValue: 'Hot', active: false
        // },
        // {
        //     title: 'Maps', icon: 'location_on', type: 'sub', active: false,
        //     children: [
        //         { path: '/maps/leafletmaps', title: 'Leaflet Maps', type: 'link', active: false },
        //     ]
        // },
        // {
        //     headTitle: 'PAGES'
        // },
        // {
        //     title: 'Pages', icon: 'menu_book', type: 'sub', active: false,
        //     children: [
        //         { path: '/pages/profile', title: 'Profile', type: 'link', active: false },
        //         { path: '/pages/editprofile', title: 'Edit-Profile', type: 'link', active: false },
        //         { path: '/pages/aboutus', title: 'About-Us', type: 'link', active: false },
        //         { path: '/pages/settings', title: 'settings', type: 'link', active: false },
        //         { path: '/pages/invoice', title: 'Invoice', type: 'link', active: false },
        //         { path: '/pages/pricing', title: 'Pricing', type: 'link', active: false },
        //         { path: '/pages/gallery', title: 'Gallery', type: 'link', active: false },
        //         { path: '/pages/todotask', title: 'Todotask', type: 'link', active: false },
        //         { path: '/pages/faqs', title: 'Faqs', type: 'link', active: false },
        //         { path: '/pages/emptypage', title: 'Empty Page', type: 'link', active: false },
        //         { path: '/switcher-one-route', title: 'Switcher-1', type: 'link', active: false },
        //         {
        //             title: 'Mail', type: 'sub', active: false, children: [
        //                 { path: '/pages/mail', title: 'Mail', type: 'link', active: false },
        //                 { path: '/pages/mail-compose', title: 'Mail Compose', type: 'link', active: false },
        //                 { path: '/pages/read-mail', title: 'Read-mail', type: 'link', active: false },
        //                 { path: '/pages/mail-settings', title: 'mail-settings', type: 'link', active: false },
        //                 { path: '/pages/chat', title: 'Chat', type: 'link', active: false },

        //             ]
        //         },
        //         {
        //             title: 'Ecommerce', type: 'sub', active: false, children: [
        //                 { path: '/pages/shop', title: 'Shop', type: 'link', active: false },
        //                 { path: '/pages/product-details', title: 'Product-Details', type: 'link', active: false },
        //                 { path: '/pages/cart', title: 'Cart', type: 'link', active: false },
        //                 { path: '/pages/check-out', title: 'Check-out', type: 'link', active: false },
        //                 { path: '/pages/wish-list', title: 'Wish-list', type: 'link', active: false },

        //             ]
        //         },
        //         {
        //             title: 'Custom Pages', type: 'sub', active: false, children: [
        //                 { path: '/custompages/signin', title: 'Sign in', type: 'link', active: false },
        //                 { path: '/custompages/sign-up', title: 'Sign up', type: 'link', active: false },
        //                 { path: '/custompages/forgot-password', title: 'Forgot Password', type: 'link', active: false },
        //                 { path: '/custompages/reset-password', title: 'Reset Password', type: 'link', active: false },
        //                 { path: '/custompages/lockscreen', title: 'Lockscreen', type: 'link', active: false },
        //                 { path: '/custompages/under-construction', title: 'UnderConstruction', type: 'link', active: false },
        //                 { path: '/custompages/error404', title: '404 Error', type: 'link', active: false },
        //                 { path: '/custompages/error500', title: '500 Error', type: 'link', active: false },
        //                 { path: '/pages/error501', title: '501 Error', type: 'link', active: false },

        //             ]
        //         }
        //     ]
        // },
        // {
        //     title: 'Utilities', icon: 'camera', type: 'sub', active: false,
        //     children: [
        //         { path: '/utilities/background', title: 'Background', type: 'link', active: false },
        //         { path: '/utilities/border', title: 'Border', type: 'link', active: false },
        //         { path: '/utilities/display', title: 'Display', type: 'link', active: false },
        //         { path: '/utilities/flex', title: 'Flex', type: 'link', active: false },
        //         { path: '/utilities/height', title: 'Height', type: 'link', active: false },
        //         { path: '/utilities/margin', title: 'Margin', type: 'link', active: false },
        //         { path: '/utilities/padding', title: 'Padding', type: 'link', active: false },
        //         { path: '/utilities/position', title: 'Position', type: 'link', active: false },
        //         { path: '/utilities/width', title: 'Width', type: 'link', active: false },
        //         { path: '/utilities/extras', title: 'Extras', type: 'link', active: false },
        //     ]
        // },
        // {
        //     title: 'Custom Pages', icon: 'lock', type: 'sub', active: false,
        //     children: [
        //         { path: '/custompages/sign-in', title: 'Sign In', type: 'link', active: false },
        //         { path: '/custompages/sign-up', title: 'Sign Up', type: 'link', active: false },
        //         { path: '/custompages/forgot-password', title: 'Forgot Password', type: 'link', active: false },
        //         { path: '/custompages/reset-password', title: 'Reset Password', type: 'link', active: false },
        //         { path: '/custompages/lock-screen', title: 'Lockscreen', type: 'link', active: false },
        //         { path: '/custompages/underconstruction', title: 'UnderConstruction', type: 'link', active: false },
        //         { path: '/custompages/404-Error', title: '404 Error', type: 'link', active: false },
        //         { path: '/custompages/500-Error', title: '500 Error', type: 'link', active: false },
        //     ]
        // },
        // {
        //     title: 'Submenus', icon: 'dns', type: 'sub', active: false,
        //     children: [
        //         {
        //             path: '', title: 'Level 1', type: 'sub', active: false,
        //             children: [
        //                 { path: '', title: 'Level 01', type: 'link', active: false },
        //                 { path: '', title: 'Level 02', type: 'link', active: false },
        //             ]
        //         },

        //     ]
        // },

    ];

    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}



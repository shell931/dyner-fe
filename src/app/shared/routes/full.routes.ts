import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'account-state',
        loadChildren: () => import('../../components/account-state/account-state.module').then(m => m.AccountStateModule)
    },
    {
        path: 'balance-withdrawal',
        loadChildren: () => import('../../components/balance-withdrawal/balance-withdrawal.module').then(m => m.BalanceWithdrawalModule)
    },
    {
        path: 'balance-withdrawal-response',
        loadChildren: () => import('../../components/balance-withdrawal-response/balance-withdrawal-response.module').then(m => m.BalanceWithdrawalResponseModule)
    },
    {
        path: 'transaction-history',
        loadChildren: () => import('../../components/transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule)
    },
    {
        path: 'transaction-detail/:id/:service',
        loadChildren: () => import('../../components/transaction-detail/transaction-detail.module').then(m => m.TransactionDetailModule)
    },
    {
        path: 'withdrawal-history',
        loadChildren: () => import('../../components/withdrawal-history/withdrawal-history.module').then(m => m.WithdrawalHistoryModule)
    },
    {
        path: 'datafono-digital',
        loadChildren: () => import('../../components/datafono-digital/datafono-digital.module').then(m => m.DatafonoDigitalModule)
    },
    {
        path: 'payment-link',
        loadChildren: () => import('../../components/payment-link/payment-link.module').then(m => m.PaymentLinkModule)
    },
    {
        path: 'payment-link-create',
        loadChildren: () => import('../../components/payment-link-create/payment-link-create.module').then(m => m.PaymentLinkCreateModule)
    },
    {
        path: 'payment-link-edit/:id',
        loadChildren: () => import('../../components/payment-link-edit/payment-link-edit.module').then(m => m.PaymentLinkEditModule)
    },
    {
        path: 'payment-link-detail/:id',
        loadChildren: () => import('../../components/payment-link-detail/payment-link-detail.module').then(m => m.PaymentLinkDetailModule)
    },
    {
        path: 'icon',
        loadChildren: () => import('../../components/icon/icon.module').then(m => m.IconModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'advanced',
        loadChildren: () => import('../../components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)   
    },
    {
        path: 'form',
        loadChildren: () => import('../../components/form/form.module').then(m => m.FormModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    },
    {
        path: 'widgets',
        loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
    },
    {
        path: 'maps',
        loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    },
    {
        path: 'menu-levels',
        loadChildren: () => import('../../components/menu-levels/menu-levels.module').then(m => m.MenuLevelsModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../../components/profile/profile.module').then(m => m.ProfileModule)
    },
];

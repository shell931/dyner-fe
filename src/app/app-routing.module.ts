import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { SwitcherOneLayoutsComponent } from './shared/layouts/switcher-one-layouts/switcher-one-layouts.component';
import { Content_Routes } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full.routes';
import { SwitcherOneRoute } from './shared/routes/switcher-one-route';
import { SessionGuard } from './shared/shared/sessionGuard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    children: Full_Content_Routes,
    canActivate: [SessionGuard]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: Content_Routes,
    // canActivate: [SessionGuard]
  },
  {
    path: '',
    component: SwitcherOneLayoutsComponent,
    children: SwitcherOneRoute,
    canActivate: [SessionGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '',
    title: 'Xpay - login',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'registro',
    title: 'Xpay - Registro',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        relativeLinkResolution: 'legacy',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

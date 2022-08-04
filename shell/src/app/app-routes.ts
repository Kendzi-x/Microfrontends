import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'dms',
  //   loadChildren: () => import('dms2/Module').then(m => m.DmsModule)
  // },
  {
    path: 'dms',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'dms2',
      exposedModule: './Module'
    })
      .then(m => m.DmsModule)
  },
];

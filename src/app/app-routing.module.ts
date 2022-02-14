import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineComponent } from './utils/offline/offline.component';
import { NetworkGuard } from './guards/network.guard';

const routes: Routes = [
  {
    path: 'offline',
    loadChildren: () =>
      import('./utils/offline/offline.module').then((m) => m.OfflineModule),
  },
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [NetworkGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

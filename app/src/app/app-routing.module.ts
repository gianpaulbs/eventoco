import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

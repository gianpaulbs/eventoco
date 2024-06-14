import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { root } from './core/constants';

const routes: Routes = [
  {
    path: root,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
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

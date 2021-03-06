import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../app/auth/auth.module')
  //     .then(m => m.AuthModule),
  // },
  {
    path: '',
    loadChildren: () => import('../app/pages/pages.module')
    .then(m => m.PagesModule)
  },

  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

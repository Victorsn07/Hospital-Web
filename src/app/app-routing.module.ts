import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'medicos',
        loadChildren: () => import('./views/pages/medicos/medicos.module').then(m => m.MedicosModule)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./views/pages/pacientes/pacientes.module').then(m => m.PacientesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

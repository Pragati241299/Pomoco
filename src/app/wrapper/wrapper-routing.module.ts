import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouteConstant } from '../core/routes';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('../home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }

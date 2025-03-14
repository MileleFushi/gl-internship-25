import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./shared/view/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'planner',
    loadComponent: () =>
      import('./shared/view/planner/planner.component').then((m) => m.PlannerComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

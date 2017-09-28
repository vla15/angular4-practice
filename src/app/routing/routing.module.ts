import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HeroComponent } from '../hero/hero.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'

const appRoutes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { 
    path: 'heroes',
    component: HeroComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
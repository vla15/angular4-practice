import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroComponent } from './hero/hero.component';


const appRoutes = [
  { path: 'crisis-center', component: 'CrisisListComponent'},
  { path: 'hero/:id', component: HeroDetailComponent },
  { 
    path: 'heroes',
    component: HeroComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroDetailComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

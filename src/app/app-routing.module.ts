import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokePageComponent } from './components/poke-page/poke-page.component';
import { PokeProfileComponent } from './components/poke-profile/poke-profile.component';

const routes: Routes = [
  { path: '', component: PokePageComponent },
  { path: 'poke-profile/:pokeUrl', component: PokeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

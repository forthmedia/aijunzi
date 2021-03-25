import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JunziLazyComponent } from './components/junzi-lazy/junzi-lazy.component';

const routes: Routes = [
  { path: 'lazy', component: JunziLazyComponent },
  { path: '', redirectTo: '/lazy', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

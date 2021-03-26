import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JunziLazyComponent } from './components/junzi-lazy/junzi-lazy.component';
import { FmLazyDirective } from './directives/fm-lazy.directive';

@NgModule({
  declarations: [
    AppComponent,
    JunziLazyComponent,
    FmLazyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

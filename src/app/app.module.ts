import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';
import { COUNTER_STATE_NAME } from './store/counter.selector';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
  ],
  imports: [BrowserModule, StoreModule.forFeature(COUNTER_STATE_NAME, reducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

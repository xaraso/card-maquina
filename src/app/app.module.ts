import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
  IgxBadgeModule,
} from 'igniteui-angular';
import { CardComponent } from './card.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
    IgxBadgeModule,
  ],
  providers: [],
  entryComponents: [],
  schemas: [],
})
export class AppModule {}

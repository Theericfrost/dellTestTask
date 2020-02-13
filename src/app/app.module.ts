import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { Block3Component } from './block3/block3.component';
import { Block1Component } from './block1/block1.component';
import { BrowserAnimationsModule , NoopAnimationsModule} from '@angular/platform-browser/animations';
import { Block2Component } from './block2/block2.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Block3Component,
    Block1Component,
    Block2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/DropDown';
import { ButtonModule } from 'primeng/Button';
import { CalendarModule } from 'primeng/Calendar';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [AppComponent, SearchComponent, ListComponent],
  imports: [
    ButtonModule,
    CalendarModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ToggleButtonModule,
    DialogModule,
    InputNumberModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

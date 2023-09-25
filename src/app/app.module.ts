import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorManagerComponent } from './donor-manager/donor-manager.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { ViewDonorComponent } from './view-donor/view-donor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DonorManagerComponent,
    AddDonorComponent,
    UpdateDonorComponent,
    ViewDonorComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StaffComponent } from './staff/staff.component';

// import { AgmCoreModule } from "@agm/core";
// import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
// import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


@NgModule({
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    LocationComponent,
    StaffComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule ,
    // AgmJsMarkerClustererModule,
    // AgmSnazzyInfoWindowModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBiYfysdWzUtJccboDFytNRoDCiuzv2IO0',
    //   language: "en",
		//   libraries: ['places','geometry']
    // }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

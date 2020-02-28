import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {InitialLayoutComponent} from './initial-layout/initial-layout.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './main-layout/components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './main-layout/components/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {WeatherDetailsComponent} from './main-layout/components/weather-details/weather-details.component';
import {WeatherDetailsGroupComponent} from './main-layout/components/weather-details-group/weather-details-group.component';
import {PicturePipesPipe} from './pipes/picture-pipes.pipe';
import {LoaderComponent} from './global-components/loader/loader.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {IconPipePipe} from './pipes/icon-pipe.pipe';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    InitialLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    MenuComponent,
    WeatherDetailsComponent,
    WeatherDetailsGroupComponent,
    PicturePipesPipe,
    LoaderComponent,
    IconPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,

  ],

  providers: [PicturePipesPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {InitialLayoutComponent} from './initial-layout/initial-layout.component';
import {WeatherDetailsComponent} from './main-layout/components/weather-details/weather-details.component';
import {WeatherDetailsGroupComponent} from './main-layout/components/weather-details-group/weather-details-group.component';


const routes: Routes = [
  {path: '', component: InitialLayoutComponent},
  {
    path: 'weather', component: MainLayoutComponent, children: [
      {path: 'detailOfCity/:id', component: WeatherDetailsComponent},
      {path: 'detailOfCityGroup/:id', component: WeatherDetailsGroupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

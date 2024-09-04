import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/pages/users/users.component';
import { MyroutesComponent } from './components/pages/myroutes/myroutes.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PackagesComponent } from './components/packages/packages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateorderComponent } from './components/pages/createorder/createorder.component';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge'
import { AddpackagesComponent } from './components/pages/addpackages/addpackages.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { AllordersComponent } from './components/pages/allorders/allorders.component';
import { FollowMyOrderComponent } from './components/pages/follow-my-order/follow-my-order.component';
import { MapComponent } from './components/pages/map/map.component';
import { ItemsComponent } from './components/pages/items/items.component';
import { Login2Component } from './components/pages/login2/login2.component';
import { ObavestenjeComponent } from './components/pages/obavestenje/obavestenje.component';
import { RequestsComponent } from './components/pages/requests/requests.component';
import { CreateTransportComponent } from './components/pages/create-transport/create-transport.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ClientHistoryComponent } from './components/pages/client-history/client-history.component';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { AddOrdersTransportComponent } from './components/pages/add-orders-transport/add-orders-transport.component';
import { SearchVehiclesComponent } from './components/pages/search-vehicles/search-vehicles.component';
import { FinancesComponent } from './components/pages/finances/finances.component';
import { SendFactureComponent } from './components/pages/send-facture/send-facture.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { SearchDriversComponent } from './components/pages/search-drivers/search-drivers.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IsporukeComponent } from './components/pages/isporuke/isporuke.component';
import { AddTravelCostComponent } from './components/pages/add-travel-cost/add-travel-cost.component';
import { CostsComponent } from './components/pages/costs/costs.component';
import { FacturesComponent } from './components/pages/factures/factures.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MyroutesComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    PackagesComponent,
    CreateorderComponent,
    AddpackagesComponent,
    MyordersComponent,
    AllordersComponent,
    FollowMyOrderComponent,
    MapComponent,
    ItemsComponent,
    Login2Component,
    ObavestenjeComponent,
    RequestsComponent,
    CreateTransportComponent,
    ClientHistoryComponent,
    ClientsComponent,
    AddOrdersTransportComponent,
    SearchVehiclesComponent,
    FinancesComponent,
    SendFactureComponent,
    VehiclesComponent,
    SearchDriversComponent,
    IsporukeComponent,
    AddTravelCostComponent,
    CostsComponent,
    FacturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

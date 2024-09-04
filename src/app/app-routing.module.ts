import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateorderComponent } from './components/pages/createorder/createorder.component';
import { PackagesComponent } from './components/packages/packages.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { AddpackagesComponent } from './components/pages/addpackages/addpackages.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { AllordersComponent } from './components/pages/allorders/allorders.component';
import { FollowMyOrderComponent } from './components/pages/follow-my-order/follow-my-order.component';
import { UsersComponent } from './components/pages/users/users.component';
import { MapComponent } from './components/pages/map/map.component';
import { ItemsComponent } from './components/pages/items/items.component';
import { Login2Component } from './components/pages/login2/login2.component';
import { ObavestenjeComponent } from './components/pages/obavestenje/obavestenje.component';
import { RequestsComponent } from './components/pages/requests/requests.component';
import { CreateTransportComponent } from './components/pages/create-transport/create-transport.component';
import { ClientHistoryComponent } from './components/pages/client-history/client-history.component';
import { AddOrdersTransportComponent } from './components/pages/add-orders-transport/add-orders-transport.component';
import { SearchVehiclesComponent } from './components/pages/search-vehicles/search-vehicles.component';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { FinancesComponent } from './components/pages/finances/finances.component';
import { SendFactureComponent } from './components/pages/send-facture/send-facture.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { SearchDriversComponent } from './components/pages/search-drivers/search-drivers.component';
import { MyroutesComponent } from './components/pages/myroutes/myroutes.component';
import { IsporukeComponent } from './components/pages/isporuke/isporuke.component';
import { AddTravelCostComponent } from './components/pages/add-travel-cost/add-travel-cost.component';
import { CostsComponent } from './components/pages/costs/costs.component';
import { FacturesComponent } from './components/pages/factures/factures.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"login2",component:Login2Component},
  {path:"registration",component:RegistrationComponent},
  {path:"packages",component:PackagesComponent},
  {path:"createorder",component:CreateorderComponent},
  {path:"addpackages/:id",component:AddpackagesComponent},
  {path:"myorders",component:MyordersComponent},
  {path:"allorders",component:AllordersComponent},
  {path:"myorders/followmyorder",component:FollowMyOrderComponent},
  {path:"users",component:UsersComponent},
  {path:"map/:id",component:MapComponent},
  {path:"inventory",component:ItemsComponent},
  {path:"obavestenje",component:ObavestenjeComponent},
  {path:"requests",component:RequestsComponent},
  {path:"create-transport",component:CreateTransportComponent},
  {path:"client-history/:id",component:ClientHistoryComponent},
  {path:"add-orders-transport/:id",component:AddOrdersTransportComponent},
  {path:"search-vehicles/:id/:weight",component:SearchVehiclesComponent},
  {path:"search-drivers/:id",component:SearchDriversComponent},
  {path:"clients",component:ClientsComponent},
  {path:"finances",component:FinancesComponent},
  {path:"send-facture/:tid",component:SendFactureComponent},
  {path:"vehicles",component:VehiclesComponent},
  {path:"my-routes",component:MyroutesComponent},
  {path:"isporuke",component:IsporukeComponent},
  {path:"add-travel-cost/:tid",component:AddTravelCostComponent},
  {path:"costs",component:CostsComponent},
  {path:"factures",component:FacturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

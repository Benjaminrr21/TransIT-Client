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

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"packages",component:PackagesComponent},
  {path:"createorder",component:CreateorderComponent},
  {path:"addpackages",component:AddpackagesComponent},
  {path:"myorders",component:MyordersComponent},
  {path:"allorders",component:AllordersComponent},
  {path:"myorders/followmyorder",component:FollowMyOrderComponent},
  {path:"users",component:UsersComponent},
  {path:"map",component:MapComponent},
  {path:"inventory",component:ItemsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorManagerComponent } from './donor-manager/donor-manager.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { ViewDonorComponent } from './view-donor/view-donor.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'donor/admin',pathMatch:'full'
  },
  {
    path:'donor/admin',component:DonorManagerComponent
  },
  {
    path:'donor/add',component:AddDonorComponent
  },
  {
    path:'donor/view/:Id',component:ViewDonorComponent
  },
  {
    path:'donor/update/:Id',component:UpdateDonorComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

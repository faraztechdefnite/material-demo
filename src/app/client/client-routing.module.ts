import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { ItemContainerComponent } from './item-container/item-container.component';

const routes: Routes = [
  {path: '', component: SidenavContainerComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'category/:id', component: ItemContainerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

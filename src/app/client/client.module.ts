import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, SidenavContainerComponent, CategoryContainerComponent, CategoryCardComponent, ItemContainerComponent, ItemCardComponent]
})
export class ClientModule { }

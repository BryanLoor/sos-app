import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';
import { ExploreContainerComponentModule } from 'src/app/components/explore-container/explore-container.module';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [
    MapaPage,
    HeaderComponent
  
  ]
})
export class MapaPageModule {}

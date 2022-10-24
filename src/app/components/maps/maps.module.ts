import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletmapsComponent } from './leafletmaps/leafletmaps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ LeafletmapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    NgbModule,
    HttpClientModule,
    LeafletModule,
  ]
})
export class MapsModule { }

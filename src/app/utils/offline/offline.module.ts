import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from './offline.component';
import { Button3dModule } from 'src/app/components/button-3d/button-3d.module';
import { OfflineRoutingModule } from './offline-routing.module';
import { NetworkService } from 'src/app/helpers/network.service';
import { NotifierService } from 'src/app/helpers/notifier.service';

@NgModule({
  declarations: [OfflineComponent],
  imports: [CommonModule, OfflineRoutingModule, Button3dModule],
  exports: [OfflineComponent],
  providers: [NetworkService, NotifierService],
})
export class OfflineModule {}

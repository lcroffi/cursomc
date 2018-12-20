import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarPage } from './registrar';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';

@NgModule({
  declarations: [
    RegistrarPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarPage),
  ],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class RegistrarPageModule {}

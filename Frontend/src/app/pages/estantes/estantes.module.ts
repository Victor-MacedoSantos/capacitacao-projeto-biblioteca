import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstantesRoutingModule } from './estantes-routing.module';
import { EstantesComponent } from './estantes.component';

@NgModule({
    declarations: [EstantesComponent],
    imports: [CommonModule, EstantesRoutingModule],
    providers: [],
})
export class EstantesModule {}
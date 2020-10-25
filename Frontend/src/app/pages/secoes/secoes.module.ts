import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecoesRoutingModule } from './secoes-routing.module';
import { SecoesComponent } from './secoes.component';

@NgModule({
    declarations: [SecoesComponent],
    imports: [CommonModule, SecoesRoutingModule],
    providers: [],
})
export class SecoesModule {}
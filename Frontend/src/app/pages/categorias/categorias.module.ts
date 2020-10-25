import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';

@NgModule({
    declarations: [CategoriasComponent],
    imports: [CommonModule, CategoriasRoutingModule],
    providers: [],
})
export class CategoriasModule {}
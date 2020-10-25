import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros.component';

@NgModule({
    declarations: [LivrosComponent],
    imports: [CommonModule, LivrosRoutingModule],
    providers: [],
})
export class LivrosModule {}
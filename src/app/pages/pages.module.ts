import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { RightComponent } from './rooms/right/right.component';


@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    providers: [],
    declarations: [],
})

export class PagesModule { }

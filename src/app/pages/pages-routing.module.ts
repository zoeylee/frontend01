import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { PagesComponent } from './pages.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LeftComponent } from './rooms/left/left.component';
import { RightComponent } from './rooms/right/right.component';
import { DestInputComponent, RangeInputComponent, PeopleInputComponent } from '~components/index';
import * as Shared from './shared';

const approutes: Routes = [
    {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'rooms', component: RoomsComponent }
        ]
    }
];

@NgModule({
    declarations: [
        PagesComponent,
        RoomsComponent,
        LeftComponent,
        RightComponent,
        DestInputComponent,
        RangeInputComponent,
        PeopleInputComponent,
        Shared.PagerComponent,
        Shared.SearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TabsModule.forRoot(),
        TypeaheadModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forChild(approutes),
        NgZorroAntdModule
    ],
    entryComponents: [

    ],
    exports: [RouterModule],
})
export class PagesRoutingModule { }

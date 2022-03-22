import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewComponentComponent} from './new-component/new-component.component';
import {TestService} from "../test.service";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        NewComponentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'report',
                loadChildren: () => import('./new-component/new-component.component').then(m => m.NewComponentComponent)
            },
        ]),
    ],
    providers: [TestService],
})
export default class DynamicModuleModule {
    componentTypes: Type<NewComponentComponent>

    constructor() {
        this.componentTypes = NewComponentComponent
    }
}

import {
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import {LazyLoaderServiceService} from "./lazy-loader-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    @ViewChild(TemplateRef, {read: ViewContainerRef})
    // @ts-ignore
    private templateViewContainerRef: ViewContainerRef;


    constructor(private lazyLoader: LazyLoaderServiceService) {
    }

    async ngOnInit() {
        const route = await this.lazyLoader.loadModule(() =>
            //TODO
            import('./dynamic-module/dynamic-module.module').then(m => m.default))
        this.templateViewContainerRef.createComponent(route);
    }

    title = 'dynamic-module';

}

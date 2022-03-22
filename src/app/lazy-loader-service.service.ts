import {
    Compiler, Injectable, Injector, NgModuleFactory, Type
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LazyLoaderServiceService {

    constructor(private compiler: Compiler, private injector: Injector) {
    }

    loadModule(path: any) {
        return (path() as Promise<NgModuleFactory<any> | Type<any>>)
            .then(elementModuleOrFactory => {
                if (elementModuleOrFactory instanceof NgModuleFactory) {
                    // if ViewEngine
                    return elementModuleOrFactory;
                } else {
                    try {
                        // if Ivy
                        return this.compiler.compileModuleAsync(elementModuleOrFactory);
                    } catch (err) {
                        throw err;
                    }
                }
            })
            .then(moduleFactory => {
                try {
                    const moduleRef = moduleFactory.create(this.injector);
                    const entryComponent = moduleRef.instance.componentTypes
                    return moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
                } catch (err) {
                    throw err;
                }
            });
    }
}

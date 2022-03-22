import {Injectable} from '@angular/core';

@Injectable()
export class TestService {

    constructor() {
    }

    getTestData() {
        return 'I am test data'
    }
}

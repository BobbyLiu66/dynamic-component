import {Component, OnInit} from '@angular/core';
import {TestService} from "../../test.service";

@Component({
    selector: 'app-new-component',
    templateUrl: './new-component.component.html',
    styleUrls: ['./new-component.component.css']
})

export class NewComponentComponent implements OnInit {

    constructor(private testService: TestService) {
    }

    ngOnInit(): void {
        const a = this.testService.getTestData()
        console.log("getTestData", a)
    }
}

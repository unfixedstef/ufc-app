import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'page-main',
    templateUrl: './page-main.component.html',
    styleUrls: ['./page-main.component.scss'],
})
export class MainPageComponent implements OnInit {

    offLineAvailablePages: string[] = ['tours', 'help'];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

}

import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {LoadingService} from "../../subcomponents/loading/loading.service";

@Component({
    selector: 'page-profil',
    templateUrl: './page-profil.component.html',
    styleUrls: ['./page-profil.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ProfilPageComponent implements OnInit {

    constructor(private loadingService: LoadingService) {
    }

    ngOnInit(): void {

    }


}

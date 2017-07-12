import {Component, ViewEncapsulation} from "@angular/core";
import {ComponentsSharingService} from "../../../services/share.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LoadingService} from "../../subcomponents/loading/loading.service";
import {ConfirmationService} from "primeng/primeng";

@Component({
    selector: 'page-search',
    templateUrl: './page-search.component.html',
    styleUrls: ['./page-search.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
/**
 * Components used to display the results of a research.
 */
export class SearchPageComponent {

    results: any[] = [];
    resultsTotalPage: number = 1;

    search: any;
    total: number = 0;
    subscriptions: Subscription[] = [];
    selection;
    selectionIsEmpty: boolean = false;
    loading: boolean = false;

    constructor(private shareService: ComponentsSharingService,
                private router: Router,
                private loadingService: LoadingService,
                private confirmationService: ConfirmationService) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

}

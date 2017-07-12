import {Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {LoadingService} from "../../subcomponents/loading/loading.service";
import {LoadingText} from "../../subcomponents/loading/LoadingText";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

/** /!\ do not confuse news and me/infos (me/infos match for user infos) **/

export class DashboardPageComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];



    constructor(private loadingService: LoadingService,
                private router: Router) {
    }


    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        for (let subscription of this.subscriptions
            ) {
            subscription.unsubscribe();
        }
    }

    private getEntities() {
        this.loadingService.startLoading(LoadingText.welcome);


        this.loadingService.stopLoading(LoadingText.welcome);
    }
}

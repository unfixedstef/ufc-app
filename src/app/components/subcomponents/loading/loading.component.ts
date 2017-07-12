import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoadingService} from "./loading.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})

/**
 * Components used to show loading message
 */
export class LoadingComponent implements OnInit, OnDestroy {

    messages: string[] = [];
    subscription: Subscription;

    constructor(public loadingService: LoadingService) {
    }

    ngOnInit(): void {
        let self = this;
        this.subscription = this.loadingService.messages$.subscribe(
            (messages) => {
                self.messages = messages;
            },
            error => {
                this.loadingService.clearAllLoadingMessages();
                console.error('LoadingComponent.ngOnInit', error);
            },
            () => {
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

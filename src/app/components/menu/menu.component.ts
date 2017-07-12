import {Component, isDevMode, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {LoadingService} from "../subcomponents/loading/loading.service";

@Component({
    selector: 'leftmenu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MenuComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[] = [];

    @ViewChild('synchronizationModal')
    synchronizationModal: ModalComponent;

    constructor(private router: Router,
                private loadingService: LoadingService,
                private zone: NgZone) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    goto(target): void {
        //console.debug('MenuComponent.goto');
        this.loadingService.clearAllLoadingMessages();
        this.router.navigate([target]);
    }
}

import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from "@angular/core";
import {Angulartics2GoogleAnalytics} from "angulartics2";
import {Message} from "primeng/components/common/api";
import {Subscription} from "rxjs";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: []
})
export class AppComponent implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];
    gaUserName: string = environment.googleAnalyticsUserName;
    notificationMessages: Message[] = [];
    notificationMessagesPersisted: Message[] = [];
    isHidden: Boolean = true;

    constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
                private router: Router,
                private location: Location,
                private zone: NgZone,
                private _changeDetectionRef : ChangeDetectorRef) {
        angulartics2GoogleAnalytics.setUsername(this.gaUserName);
    }

    ngOnInit() {

        let me = this;
        //
        // if (CordovaService.isCordovaPlatform()) {
        //     document.addEventListener("offline", () => {
        //         me.notificationService.error('Connexion', 'La connexion avec le serveur a été perdue');
        //
        //         if (me.onlineStatusService.isStrictlyOnlineStatus() && navigator.connection.type == Connection.NONE && !me.onlineStatusService.isPendingStatus()) {
        //             this.zone.run(() => {
        //                 me.router.navigate(['switchOffline']);
        //             });
        //
        //         }
        //     }, false);
        //
        //     document.addEventListener("online", () => {
        //         me.notificationService.info('Connexion', 'La connexion avec le serveur a été rétablie');
        //     }, false);
        //
        //
        // }
        /*
         me.subscriptions.push(me.onlineStatusService.hasInternetConnection$.subscribe(result => {
         if (result) {
         me.notificationService.info('Connexion', 'La connexion avec le serveur a été rétablie')
         } else {
         me.notificationService.error('Connexion', 'La connexion avec le serveur a été perdue')
         }
         }));
         */
    }

    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}

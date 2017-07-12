import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Response} from "@angular/http";
import {Subscription} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
    selector: 'page-maintenance',
    templateUrl: './page-maintenance.component.html',
    styleUrls: ['./page-maintenance.component.scss'],
})
export class MaintenancePageComponent implements OnInit {

    private readonly CHECK_MAINTENANCE_INTERVAL: number = 5000;

    private pingUrl:string =environment.api.uri;
    private timeoutDuration: number = environment.http.timeout;
    private checkMaintenanceSubscibe: Subscription;

    constructor(private http: Http,
                private router: Router) {
    }

    ngOnInit(): void {
        this.ping();
    }

    ngOnDestroy() {
        this.checkMaintenanceSubscibe.unsubscribe();
    }


    private ping(){
        this.checkMaintenanceSubscibe = IntervalObservable.create(this.CHECK_MAINTENANCE_INTERVAL)
            .subscribe((data) =>{
                this.http.get(this.pingUrl)
                    .timeout(this.timeoutDuration)
                    .toPromise()
                    .then((res: Response) => {
                        this.router.navigate(['**']);
                    })
                    .catch(()=>{});
            })
    }

}

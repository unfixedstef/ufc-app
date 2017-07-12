import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {appRoutingProviders, routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./components/menu/menu.component";
import {DashboardPageComponent} from "./components/pages/dashboard/page-dashboard.component";
import {ProfilPageComponent} from "./components/pages/profil/page-profil.component";
import {SearchPageComponent} from "./components/pages/search/page-search.component";
import {ComponentsSharingService} from "./services/share.service";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {AutoCompleteModule} from "primeng/primeng";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {GrowlModule} from "primeng/components/growl/growl";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {Angulartics2GoogleAnalytics, Angulartics2Module} from "angulartics2";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {ConfirmationService} from "primeng/components/common/api";
import {LoadingComponent} from "./components/subcomponents/loading/loading.component";
import {MenuModule} from "primeng/components/menu/menu";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        SearchPageComponent,
        DashboardPageComponent,
        ProfilPageComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        Ng2Bs3ModalModule,
        InfiniteScrollModule,
        CalendarModule,
        GrowlModule,
        DragulaModule,
        AutoCompleteModule,
        MenuModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
        ConfirmDialogModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "fr-FR"},
        appRoutingProviders,
        ComponentsSharingService,
        ConfirmationService,
        Angulartics2GoogleAnalytics,
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: []
})
export class AppModule {
}

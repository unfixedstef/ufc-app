import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {isNullOrUndefined} from "util";

@Injectable()
export class LoadingService {

    private messageCollection: string[] = [];

    messages: Subject<string[]>;
    loading: Subject<boolean>;

    messages$: Observable<string[]>;
    loading$: Observable<boolean>;

    constructor() {
        this.messages = new Subject();
        this.messages$ = this.messages.asObservable();
        this.loading = new Subject();
        this.loading$ = this.loading.asObservable();
    }

    startLoading(message: string): void {
        if (this.messageCollection.indexOf(message) == -1) {
            this.messageCollection.push(message);
            this.messages.next(this.messageCollection);
            this.loading.next(this.isLoading());
        }
    }

    stopLoading(message: string): void {
        this.messageCollection.splice(this.messageCollection.indexOf(message));
        this.messages.next(this.messageCollection);
        this.loading.next(this.isLoading());
    }

    clearAllLoadingMessages(): void {
        if (this.isLoading()) {
            this.messageCollection = [];
            this.messages.next(this.messageCollection);
        }
    }

    private isLoading(): boolean {
        return !isNullOrUndefined(this.messageCollection) && this.messageCollection.length > 0;
    }
}

import {Injectable} from "@angular/core";
import {LoadingService} from "../components/subcomponents/loading/loading.service";

/**
 * Service dedicated to the exchanges between components.
 */
@Injectable()
export class ComponentsSharingService {


    constructor(private loadingService: LoadingService) {
    }
}

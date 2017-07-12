import * as _ from "lodash";
import {config} from "./config";

export const environment = _.merge(config, {
    googleAnalyticsUserName: 'UA-88958002-1',

    api: {
        uri: 'https://api.cds.sncf-reseau.release.trsb.net' //TODO Ulric
    },
    oauth: {
        redirect_uri_base: 'https://web.cds.sncf-reseau.release.trsb.net',//TODO Ulric
        uri: 'https://idp-rec.sncf.fr/openam/oauth2',//TODO Ulric
        logout_uri: 'https://idp-rec.sncf.fr/openam/UI/Logout?goto=https://web.cds.sncf-reseau.release.trsb.net' + config.oauth.logout_redirect_uri,
        client_secret: '8rnegEKXNw8d8EXcXtfI'//TODO Ulric
    },

    version: config.version_number + '-PROD'

});

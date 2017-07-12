import * as _ from 'lodash';
import {config} from './config';

export const environment = _.merge(config,  {
    production: false,
    applicationVersion: 'web',
    debug: true,
    api: {
        uri: 'https://api.cds-test.sncf-reseau.release.trsb.net'
    },
    oauth: {
        redirect_uri_base: 'https://web.cds-test.sncf-reseau.release.trsb.net',
        logout_uri: 'https://idp-rec.sncf.fr/openam/UI/Logout?goto=https://web.cds.sncf-reseau.release.trsb.net' + config.oauth.logout_redirect_uri,
    },
    googleAnalyticsUserName: 'UA-88958002-1',

    version: config.version_number + '-RELEASE'
});

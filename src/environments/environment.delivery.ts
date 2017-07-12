import * as _ from 'lodash';
import {config} from './config';

export const environment = _.merge(config,  {
    production: false,
    applicationVersion: 'web',
    debug: true,
    api: {
        uri: 'https://api.cds.sncf-reseau.delivery.trsb.net'
    },
    oauth: {
        redirect_uri_base: 'https://web.cds.sncf-reseau.delivery.trsb.net',
        logout_uri: 'https://idp-dev.sncf.fr/openam/UI/Logout?goto=https://web.cds.sncf-reseau.delivery.trsb.net' + config.oauth.logout_redirect_uri,
    },

    version: config.version_number + '-RELEASE',
});

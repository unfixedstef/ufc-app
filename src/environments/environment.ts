import * as _ from 'lodash';
import {config} from './config';

export const environment = _.merge(config,  {
    production: false,
    applicationVersion: 'web',
    debug: true,
    oauth: {
        client_secret: '8rnegEKXNw8d8EXcXtfI',
        logout_uri: config.oauth.logout_base_uri + config.oauth.redirect_uri_base + config.oauth.logout_redirect_uri
    },

    version: config.version_number + '-LOCAL',

    http:{
        timeout:30000
    }
});

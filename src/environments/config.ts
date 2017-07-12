// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const config = {
    debug: false,
    production: true,
    applicationVersion: 'web',
    api: {
        //uri: 'https://api.cds.sncf-reseau.delivery.trsb.net'
        uri: 'http://127.0.0.1:81'
        //apiUrl: 'http://127.0.0.1:81/api'
        //uri: 'http://10.1.13.139:81' //API Dorian
    },
    oauth: {
        uri: 'https://idp-dev.sncf.fr/openam/oauth2',
        logout_base_uri: 'https://idp-dev.sncf.fr/openam/UI/Logout?goto=',
        logout_redirect_uri: '/logoutDone',
        redirect_uri_base: 'http://localhost:4200',
        redirect_uri_path: '/login/check',
        refresh_token_path: '/oauth/refresh-token',
        access_token_path: '/oauth/access-token',
        endpoints: {
            authorize: 'authorize'
        },
        client_id: 'CarnetdeSanteduBatiment',
        client_secret: 'b2rowA5hph3kmoySRr9e',
        response_type: 'code',
        realm: '%2FIDP',
        scope: 'openid profile email',
        token_expiration_offset: 4
    },

    apiEntityUrl: {
        buildings: '/buildings',
        favorites: '/favorites',
        favorite: '/favorites',
        tours: '/tours',
        tour: '/tour',
        // rounds: '/tours',
        pages: '/pages',
        consumptions: '/consumptions',
        normStandard: '/standards/norms',
        status: '/status',
        regions: '/regions',
        wallets: '/wallets',
        dits: '/dits',
        structures: '/structures',
        picture: '/picture',
        contacts: '/contacts',
        cotations: '/cotations',
        userInfos: '/me',
        permissions: '/permissions',
        cotationsSummary: '/cotations/summary',
        incorrectData: '/incorrect_data',
        leases: '/leases',
        references: '/references',
        designations: '/designations',
        constats: '/constats',
        news: '/news',
        decisions:'/decisions-cotech',
        content:'/content',
        documents:'/content/documents',
        faq:'/content/faq'
    },

    db: {
        name: 'cdsDb',
        tableNames: {
            buildings: 'BUILDING',
            favorites: 'FAVORITE',
            tours: 'TOURS'
        }
    },


    requests: {
        findAll: '/list',
        findBy: '/show',
        update: '/edit',
        create: '/create',
        delete: '/delete',
        search: '/search',
        searchRff: '/rff',
        suggest: '/suggest',
        show: '/show',
        showAll: '/show-all',
        count: '/count',
        infos: '/infos',
        tour: {
            addBuilding: '/buildings/add',
            removeBuilding: '/buildings/remove'
        },
        tours: {
            namesList: '/names/list',
            findAllNoPagination: '/list-all'
        },
        fluidStandard: {
            show: '/show'
        },
        consumptions: {
            list: '/list'
        },
        status: {
            list: '/list'
        },
        regions: {
            list: '/list'
        },
        wallets: {
            list: '/list'
        },
        dits: {
            list: '/list'
        },
        structures: {
            list: '/list'
        },
        building: {
            setComment: '/comment/set',
            updateComment: '/comment/update',
            deleteComment: '/comment/delete',
            isUpToDate: '/is_up_to_date/',
            synchronize:'/buildings/sync',
            synchronizeForce:'/buildings/sync/ignore-conflicts',
            urlBuildingsBySameSiteCode:'/bySameSiteCode'
        },
        picture: {
            create: '/create',
            delete: '/delete',
        },
        contacts: {
            list: '/list',
            associate: '/associate/multiple',
            disassociate: '/disassociate',
            save: '/save'
        },
        incorrectData: {
            list: '/list',
            create: '/create',
        },
        references: {
            all: '/all/list'
        },
        news: {
            getNewsCategories: '/categories',
            read: '/read/'
        },
        content: {
            getIndicators: '/links'
        }
    },

    search: {
        minSearchSize: 3,
        maxSearchCriteria: 3,
        autocompletionRequestTimeout: 500, // Exprimé en millisecondes
    },

    version: '0.21.2.0-SNAPSHOT',
    version_number: '0.21.2.0',

    applicationDataDirectory: 'carnetdesante',

    tour: {
        maxNameLength: 25
    },

    http: {
        timeout: 30000
    },

    carousel: {
        totalImageToDisplay: 2,
    },

    googleAnalyticsUserName: 'UA-93688978-1',

    arcgisUrl : 'https://js.arcgis.com/4.3'
};

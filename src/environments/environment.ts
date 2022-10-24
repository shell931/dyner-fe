// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api: {
        baseUrl: 'http://52.44.5.11:2100/dyner-api-mobile/public/api/v1/',
        baseAuthUrl: 'http://52.44.5.11:2100/dyner-api-mobile/public/api/auth/login',
        baseProfileUrl: 'http://52.44.5.11:2100/dyner-api-mobile/public/api/auth/profile',
        bankImage: 'https://imagesdyner.s3.us-east-2.amazonaws.com',
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

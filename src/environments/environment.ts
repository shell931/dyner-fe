// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api: {
        baseUrl: ' https://x-dev.cloud/api-mobile/public/api/v1/',
        baseUrl2: ' https://x-dev.cloud/api-mobile/public/api/',
        baseAuthUrl: 'https://x-dev.cloud/api-mobile/public/api/auth/',
        baseProfileUrl: 'https://x-dev.cloud/api-mobile/public/api/auth/profile',
        bankImage: 'https://img-app-v1.s3.us-east-1.amazonaws.com',
        linkImage: 'https://img-productos-comercios-v1.s3.us-east-1.amazonaws.com',
        gatewayUrl: 'https://www.x-dev.cloud/gateway/public/'
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

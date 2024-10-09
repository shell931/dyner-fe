// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api: {
        baseUrl: ' https://www.develop-dyner24.online/dyner-api-mobile/public/api/v1/',
        baseUrl2: ' https://www.develop-dyner24.online/dyner-api-mobile/public/api/',
        baseAuthUrl: 'https://www.develop-dyner24.online/dyner-api-mobile/public/api/auth/',
        baseProfileUrl: 'https://www.develop-dyner24.online/dyner-api-mobile/public/api/auth/profile',
        bankImage: 'https://imagesd24-pro.s3.us-east-1.amazonaws.com',
        linkImage: 'https://img-productos-comercios-pro.s3.us-east-1.amazonaws.com',
        gatewayUrl: 'http://52.44.5.11:1400/dynergateway/public/'
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

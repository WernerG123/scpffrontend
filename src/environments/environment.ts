// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//  baseUrl: 'http://102.130.118.84:1337/'

export const environment = {
  production: false,
  vehiclesUrl: 'http://102.130.118.84:1337/vehicles',
  personsUrl: 'http://102.130.118.84:1337/persons',
  reportsUrl: 'http://102.130.118.84:1337/reports',
  authUrl: 'http://102.130.118.84:1337/auth/local',
  incidentsUrl: 'http://102.130.118.84:1337/incidents',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

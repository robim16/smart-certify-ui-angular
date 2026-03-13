import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import {
  IPublicClientApplication,
  PublicClientApplication,
  InteractionType,
  BrowserCacheLocation,
  LogLevel,
} from '@azure/msal-browser';
import {
  MsalInterceptor,
  MSAL_INSTANCE,
  MsalInterceptorConfiguration,
  MsalGuardConfiguration,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
  MsalService,
  MsalGuard,
  MsalBroadcastService,
  ProtectedResourceScopes,
} from '@azure/msal-angular';

import { environment } from '../environments/environment';

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}


export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_smartcertify_susi',
    resetPassword: 'B2C_1_smartcertify_password_reset',
    editProfile: 'B2C_1_smartcertify_profile_edit',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_susi',
    },
    resetPassword: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_password_reset',
    },
    editProfile: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_profile_edit',
    },
  },
  authorityDomain: 'smartlearnbykarthik.b2clogin.com',
};

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.adb2cConfig.clientId,
      authority: b2cPolicies.authorities.signUpSignIn.authority, //environment.msalConfig.auth.authority,
      knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
      redirectUri: '/',
      postLogoutRedirectUri: '/',
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<
    string,
    //Array<string>
    Array<string | ProtectedResourceScopes> | null
  >();

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/courses`,
    [
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(`${environment.adb2cConfig.apiEndpointUrl}/Exam`, [
    {
      httpMethod: 'GET',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'POST',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'PUT',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
  ]);

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/questions`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/choices`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/questions`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    loginFailedRoute: '/login-failed',
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

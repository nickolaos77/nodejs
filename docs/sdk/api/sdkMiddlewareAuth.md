# `sdk-middleware-auth`
Middelware to authenticate the [request](/sdk/Glossary.md#clientrequest) using one of the supported _auth flows_.

## Install

#### Node.js
```bash
npm install --save @commercetools/sdk-middleware-auth
```

#### Browser
```html
<script src="https://unpkg.com/@commercetools/sdk-middleware-auth/dist/commercetools-sdk-middleware-auth.umd.min.js"></script>
<script>// global: CommercetoolsSdkMiddlewareAuth</script>
```

## `createAuthMiddlewareForClientCredentialsFlow(options)`

Creates a [middleware](/sdk/Glossary.md#middleware) to handle authentication for the [Client Credentials Flow](http://dev.commercetools.com/http-api-authorization.html#client-credentials-flow) of the commercetools platform API.

#### Named arguments (options)

1. `host` *(String)*: the host of the OAuth API service
2. `projectKey` *(String)*: the key of the project to assign the default scope to
3. `credentials` *(Object)*: the client credentials for authentication (`clientId`, `clientSecret`)
4. `scopes` *(Array)*: a list of [scopes](http://dev.commercetools.com/http-api-authorization.html#scopes) (default `manage_project:{projectKey}`) to assign to the OAuth token


#### Usage example

```js
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'

const client = createClient({
  middlewares: [
    createAuthMiddlewareForClientCredentialsFlow({
      host: 'https://auth.commercetools.com',
      projectKey: 'test',
      credentials: {
        clientId: '123',
        clientSecret: 'secret',
        user: {
          username: string;
          password: string;
        }
      },
      scopes: [
        'view_products:test',
        'manage_orders:test',
      ],
    }),
  ],
})
```

## `createAuthMiddlewareForPasswordFlow(options)`

Creates a [middleware](/sdk/Glossary.md#middleware) to handle authentication for the [Password Flow](http://dev.commercetools.com/http-api-authorization.html#password-flow) of the commercetools platform API.

#### Named arguments (options)

1. `host` *(String)*: the host of the OAuth API service
2. `projectKey` *(String)*: the key of the project to assign the default scope to
   - The user field is an object containining `username` and `password`. [Sample below](#usage-example)
3. `credentials` *(Object)*: the client credentials for authentication (`clientId`, `clientSecret`)
4. `scopes` *(Array)*: a list of [scopes](http://dev.commercetools.com/http-api-authorization.html#scopes) to assign to the OAuth token. _No default scope is sent_


#### Usage example

```js
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForPasswordFlow } from '@commercetools/sdk-middleware-auth'

const client = createClient({
  middlewares: [
    createAuthMiddlewareForPasswordFlow({
      host: 'https://auth.commercetools.com',
      projectKey: 'test',
      credentials: {
        clientId: '123',
        clientSecret: 'secret',
        user: {
          username: string;
          password: string;
        }
      },
      scopes: [
        'view_products:test',
        'manage_orders:test',
      ],
    }),
  ],
})
```

## `createAuthMiddlewareForAnonymousSessionFlow(options)`

Creates a [middleware](/sdk/Glossary.md#middleware) to handle authentication for the [Anonymous Session Flow](http://dev.commercetools.com/http-api-authorization.html#tokens-for-anonymous-sessions) of the commercetools platform API.

#### Named arguments (options)

1. `host` *(String)*: the host of the OAuth API service
2. `projectKey` *(String)*: the key of the project to assign the default scope to
3. `credentials` *(Object)*: the client credentials for authentication (`clientId`, `clientSecret`, `anonymousId`)
4. `scopes` *(Array)*: a list of [scopes](http://dev.commercetools.com/http-api-authorization.html#scopes) (default `manage_project:{projectKey}`) to assign to the OAuth token


#### Usage example

```js
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForAnonymousSessionFlow } from '@commercetools/sdk-middleware-auth'

const client = createClient({
  middlewares: [
    createAuthMiddlewareForAnonymousSessionFlow({
      host: 'https://auth.commercetools.com',
      projectKey: 'test',
      credentials: {
        clientId: '123',
        clientSecret: 'secret',
        anonymousId: 'unique-id-of-customer-not-required',
      },
      scopes: [
        'view_products:test',
        'manage_orders:test',
      ],
    }),
  ],
})
```

## `createAuthMiddlewareForRefreshTokenFlow(options)`

Creates a [middleware](/sdk/Glossary.md#middleware) to handle authentication for the [Refresh Token Flow](http://dev.commercetools.com/http-api-authorization.html#refresh-token-flow) of the commercetools platform API.

#### Named arguments (options)

1. `host` *(String)*: the host of the OAuth API service
2. `projectKey` *(String)*: the key of the project to assign the default scope to
3. `credentials` *(Object)*: the client credentials for authentication (`clientId`, `clientSecret`)
4. `refreshToken` *(String)*: refreshToken from the API to use to fetch new token.


#### Usage example

```js
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForRefreshTokenFlow } from '@commercetools/sdk-middleware-auth'

const client = createClient({
  middlewares: [
    createAuthMiddlewareForRefreshTokenFlow({
      host: 'https://auth.commercetools.com',
      projectKey: 'test',
      credentials: {
        clientId: '123',
        clientSecret: 'secret',
      },
      refreshToken: 'foobar123'
    }),
  ],
})
```

# Template for Preact PWA

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit dahnielson/pwa-preact-parcel-template preact-app
cd preact-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Install the dependencies...

```bash
cd preact-app
yarn install
```

...then start [Parcel](https://parceljs.org):

```bash
yarn start
```

Navigate to [localhost:1234](http://localhost:1234). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
yarn global install now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
yarn global install surge
```

Then, from within your project folder:

```bash
yarn build
surge public
```

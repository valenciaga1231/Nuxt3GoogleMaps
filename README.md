# Nuxt 3 Google Maps

This is not library to work with Google Maps API. This is just a tutorial to add your own Google Maps API to your Nuxt3 Project.
It used the Maps JavaScript API. Documentation can be found on this link: (https://developers.google.com/maps/documentation/javascript)

This tutorial optimizes the number of requests to the Google, since it uses only 1 request per every page load. After page is loaded you can remount the GoogleMap component as many times as you want
and this will not trigger new API call to google until the page is refreshed. The function that triggers API call is initializeGoogleMap and can be found in ~components/google.ts.

Note: On the same way you can add the Street View Panorama that is also part of the Maps JavaScript API (not included in this tutorial). With adding panorama no additional calls to the google API will be triggered. So you can have both
google Map and Panorama loaded on your page with only 1 API call. No additional API calls will be triggered until page is refreshed.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt3.

## Setup

Make sure to install the dependencies:

```bash
# cmd
git clone https://github.com/ValenciagaTutorials/GoogleMapsNuxt3.git

#cmd
cd Nuxt3GoogleMaps

# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

Also add this official Vue3 extension to VSCode: https://marketplace.visualstudio.com/items?itemName=Vue.volar

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

---

## Deploy Docker Container

```bash
# Build
docker build -t <image_name> .

# Run
docker run -dp 3000:3000 <image_name>
```

Access app through http://localhost:3000.

First port is host port, so choose whatever you want. Do not edit second port.

# Nuxt 3 Google Maps

This is not library to work with Google Maps API. This is just a tutorial to add your own Google Maps API (it's easy) to your Nuxt3 Project.

In this way you can hold the same instance of google Map and not use any more API calls (until reloaded or re-mounted). Component must not be re-mounted, because new Map object will be created and new API call used. For minimal usage of Google MAP API calls, component must stay hidden in the background of a page if your API calls are limited to not trigger additional API calls.

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

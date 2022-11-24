# Nuxt 3 Google Maps

This is not library to work with Google Maps API. This is just a tutorial to add your own Google Maps API (it's easy) to your Nuxt3 Project. Pinia State Management for Vue3 is used to easily access Google Map object from all other components, stores or composables when active.

In this way you can hold the same instance onf google Map and not use any more API calls (until reloaded or re-mounted). Compoenent must not be re-mounted, because new Map object will be created and new API call used. For minimal usage of Google MAP API calls, component must stay hidden in the background of a page if your API calls are limited to not trigger additional API calls.

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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    runtimeConfig: {
        public: {
            googleMapKey: process.env.NUXT_GOOGLE_MAP_KEY || "",
        },
    },
});

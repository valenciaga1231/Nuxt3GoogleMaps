// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        googleMapKey: "",
    },
    modules: ["@pinia/nuxt"],
    typescript: { strict: true },
});

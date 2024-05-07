// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    runtimeConfig: {
        googleMapKey: "",
    },
    imports: {
        autoImport: true,
    },
    // typescript: {
    //     typeCheck: true,
    //     strict: true,
    // },
});

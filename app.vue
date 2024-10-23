<template>
    <div>
        <h3 style="text-align: center">Google Maps Demo</h3>
        <div style="text-align: center">
            <span>Center map to [0,0]</span>
            <br />
            <button @click="centerGoogleMap(0, 0)">Center</button>
        </div>
        <GoogleMap v-if="isGoogleMapMounted && isMapsLibraryLoaded" />
        <div>
            <div style="text-align: center; margin-top: 20px">
                <button @click="toggleGoogleMap">{{ isGoogleMapMounted ? "Unmount" : "Mount" }} Google Map</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const isGoogleMapMounted = ref(true);
        const isMapsLibraryLoaded = ref(false);
        const runtimeConfig = useRuntimeConfig();

        useHead({
            title: `Nuxt Google Map`,
        });

        onMounted(() => {
            useHead({
                script: [
                    {
                        src: `https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.public.googleMapKey}&v=weekly`,
                        async: true,
                        defer: true,
                        onload: () => {
                            console.log("Google Maps API loaded");
                            isMapsLibraryLoaded.value = true;
                        },
                    },
                ],
            });
        });

        const toggleGoogleMap = () => {
            isGoogleMapMounted.value = !isGoogleMapMounted.value;
        };

        return {
            isGoogleMapMounted,
            isMapsLibraryLoaded,
            toggleGoogleMap,
        };
    },
};
</script>

<style scoped></style>

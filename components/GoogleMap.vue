<template>
    <div>
        <div ref="map_element" id="map"></div>
    </div>
</template>

<script lang="ts">
declare global {
    interface Window {
        initMap: () => void;
    }
}
import mapStore from "~~/stores/MapStore";

export default defineComponent({
    setup() {
        // Stores
        const map_store = mapStore();

        // Refs
        const map_element = ref();

        // Get necessary script for Map initializtion
        const runtimeConfig = useRuntimeConfig();
        if (process.server) {
            console.log("This is my google maps API key:\n", runtimeConfig.googleMapKey);
            console.log("Appending UseHead");
            useHead({ script: [{ src: `https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.googleMapKey}&callback=initMap&v=weekly` }] });
        }

        onMounted(() => {
            // Pass HTML element to Store
            map_store.google_map_html = map_element.value;

            // Pass initMap function to browser's global windows object
            window.initMap = map_store.initializeGoogleMap();
        });
        return { map_element };
    },
});
</script>

<style scoped>
#map {
    height: 400px;
    width: 100%;
}
</style>

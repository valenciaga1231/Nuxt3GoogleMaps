<template>
    <div>
        <div ref="map_element" id="map"></div>
    </div>
</template>

<script>
import mapStore from "~~/stores/MapStore.ts";

export default defineComponent({
    setup() {
        // Stores
        const map_store = mapStore();

        // Refs
        const map_element = ref();

        onMounted(() => {
            // Pass HTML element to Store
            map_store.google_map_html = map_element.value;

            // Pass initMap function to browser's global windows object so Google Map script will find It
            map_store.initializeGoogleMap();
        });

        return { map_element };
    },
});
</script>

<style scoped>
#map {
    /* Define Map measures */
    height: 400px;
    width: 50%;

    /* Center Map */
    margin: auto;
}
</style>

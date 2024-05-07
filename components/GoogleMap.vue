<template>
    <div>
        <div ref="google_map" id="map"></div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        // Refs
        const google_map = ref<HTMLElement | null>(null);

        onMounted(() => {
            if (!google_map.value) throw new Error("Google Map DOM element not found");
            useGoogleMapHTML().value = google_map.value; // Save google map html
            initializeGoogleMap(google_map.value); // Init Google Map
        });

        return { google_map };
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

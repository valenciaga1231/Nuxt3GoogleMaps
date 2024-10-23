<template>
    <div>
        <div ref="google_map" id="map"></div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const google_map = ref<HTMLElement | null>(null);

        onMounted(() => {
            if (!google_map.value) throw new Error("Google Map DOM element not found");
            const existingMap = useGoogleMapHTML().value;

            // Append existing Google Map HTML to the DOM or create new one
            if (existingMap) {
                google_map.value.appendChild(existingMap);
            } else {
                useGoogleMapHTML().value = google_map.value; // Save google map html
                initializeGoogleMap(google_map.value); // Init Google Map
            }
        });

        return { google_map };
    },
});
</script>

<style scoped>
#map {
    /* Define Map measures */
    height: 600px;
    width: 800px;

    /* Center Map */
    margin: auto;
}
</style>

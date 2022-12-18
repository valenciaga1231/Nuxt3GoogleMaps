<template>
    <div>
        <h3 style="text-align: center">Google Maps Demo</h3>
        <div style="text-align: center">
            <span>Center map to [0,0]</span>
            <br />
            <button @click="centerMap">Center</button>
        </div>
        <GoogleMap />
    </div>
</template>

<script>
import mapStore from "./stores/MapStore";

export default {
    setup() {
        // Store
        const map_store = mapStore();

        // Center Map
        const centerMap = () => map_store.centerMapTo({ lat: 0, lng: 0 });
        // Get necessary script for Map initializtion
        if (process.server) {
            const runtimeConfig = useRuntimeConfig();
            useHead({ script: [{ src: `https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.googleMapKey}&v=weekly`, defer: true }] });
        }

        return { map_store, centerMap };
    },
};
</script>

<style scoped></style>

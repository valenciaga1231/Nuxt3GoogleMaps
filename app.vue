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

        return { map_store, centerMap };
    },
};
</script>

<style scoped></style>

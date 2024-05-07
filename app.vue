<template>
    <div>
        <h3 style="text-align: center">Google Maps Demo</h3>
        <div style="text-align: center">
            <span>Center map to [0,0]</span>
            <br />
            <button @click="centerGoogleMap(0, 0)">Center</button>
        </div>
        <GoogleMap />
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        // Get necessary script for Map initializtion (google maps API key required!!)
        if (process.server) {
            const runtimeConfig = useRuntimeConfig();
            useHead({ script: [{ src: `https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.googleMapKey}&v=weekly`, defer: true }] });
        }

        return {};
    },
};
</script>

<style scoped></style>

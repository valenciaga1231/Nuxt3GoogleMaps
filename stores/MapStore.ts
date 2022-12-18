import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

const mapStore = defineStore("mapStore", () => {
    let google_map_html: Ref<HTMLElement | undefined> = ref();
    let google_map: google.maps.Map;

    // Constants
    let map_view_position: google.maps.LatLngLiteral = { lat: 60, lng: 10 }; // Map view starting position

    /**
     * Function initializes new Google Map
     */
    const initializeGoogleMap = (): void => {
        // Initialize Google Map
        google_map = new google.maps.Map(google_map_html.value as HTMLElement, {
            center: { ...map_view_position },
            zoom: 4,

            styles: [
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }],
                },
            ],
            clickableIcons: false,
            streetViewControl: false,
            mapTypeControl: false,
            draggableCursor: "crosshair",
            fullscreenControl: false,
            minZoom: 2,

            restriction: {
                latLngBounds: {
                    north: 85,
                    south: -85,
                    west: -180,
                    east: 180,
                },
            },

            gestureHandling: "greedy", // Does not need 2 fingers to move on map when using touchscreen (Not working on Firefox Mobile. Safari, not sure.)
            keyboardShortcuts: false,
        });
    };
    /**
     * Set center of Google Map to desired coordintes
     *
     * @param coordinates Coordinates
     * @returns void
     */
    const centerMapTo = (coordinates: google.maps.LatLngLiteral): void => google_map.setCenter(coordinates);

    return { google_map_html, initializeGoogleMap, centerMapTo };
});

export default mapStore;

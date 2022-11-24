import { defineStore } from "pinia";

interface Coordinate {
    lat: number;
    lng: number;
}

const mapStore = defineStore("mapStore", () => {
    const google_map_html = ref(null);
    let google_map: google.maps.Map;

    // Constants
    let map_view_position: Coordinate = { lat: 0, lng: 0 }; // Map view starting position

    /**
     * Function initializes new Google Map
     */
    const initializeGoogleMap = (): void => {
        // Initialize Google Map
        google_map = new google.maps.Map(google_map_html.value, {
            center: { ...map_view_position },
            zoom: 2,

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

    return { google_map, google_map_html, initializeGoogleMap };
});

export default mapStore;

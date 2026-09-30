import { useEffect } from "react";
import L from "leaflet";

export default function MarketMapPage() {
  useEffect(() => {
    // ✅ Cleanup existing map instance if it exists
    if (L.DomUtil.get("map") != null) {
      L.DomUtil.get("map")._leaflet_id = null;
    }

    const map = L.map("map").setView([13.0827, 80.2707], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const marketLocations = [
      { name: "Chennai Market", lat: 13.0827, lng: 80.2707 },
      { name: "Coimbatore APMC", lat: 11.0168, lng: 76.9558 },
      { name: "Madurai Vegetable Market", lat: 9.9252, lng: 78.1198 },
      { name: "Trichy Wholesale Yard", lat: 10.7905, lng: 78.7047 },
    ];

    marketLocations.forEach((m) => {
      L.marker([m.lat, m.lng])
        .addTo(map)
        .bindPopup(`<strong>${m.name}</strong>`);
    });

    // Optional: clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="pt-20 px-4 pb-10">
      <h1 className="text-3xl font-bold text-lime-700 mb-4">🗺️ Market Locations</h1>
      <div id="map" className="w-full h-[500px] rounded-xl shadow border border-lime-400"></div>
    </div>
  );
}

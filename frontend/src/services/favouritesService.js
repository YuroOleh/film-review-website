const API_URL = import.meta.env.VITE_API_URL + "films/favourites/";

export const favouritesService = {
    async getAll(userId) {
        const res = await fetch(`${API_URL}?userId=${userId}&ordering=created_at`);
        if (!res.ok) throw new Error("Favourites were not found...");

        return res.json();
    },

    async addToFavourites(userId, filmId) {
        const body = {
            user: userId,
            film: filmId
        };

        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) throw new Error("Failed to add to favourites...");
        return res.json();
    },

    async removeFromFavourites(userId, filmId) {
        const res = await fetch(`${API_URL}?userId=${userId}&filmId=${filmId}`);
        if (!res.ok) throw new Error("Failed to find favourites items...");

        const items = await res.json();
        if (items.length === 0) return false;

        for (const item of items) {
            await fetch(`${API_URL}${item.id}/`, { method: "DELETE" });
        }

        return true;
    },

    async checkInFavourites(userId, filmId) {
        const res = await fetch(`${API_URL}?userId=${userId}&filmId=${filmId}`);

        if (!res.ok) {
            throw new Error("Failed to check favourites...");
        }

        const data = await res.json();
        return data.length > 0;
    }
};
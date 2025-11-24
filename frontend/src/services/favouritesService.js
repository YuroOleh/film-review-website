const API_URL = "http://localhost:3000/favourites";

export const favouritesService = {
    async getAll(userId){
        const res = await fetch(`${API_URL}?userId=${userId}`);
        if (!res.ok) throw new Error("Films were not found...");

        return res.json();
    },

    async addToFavourites(userId, filmId){
        const body = {
            userId,
            filmId
        }

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

    async removeFromFavourites(userId, filmId){
        const res = await fetch(`${API_URL}?userId=${userId}&filmId=${filmId}`);
        if (!res.ok) throw new Error("Failed to find favourites items...");

        const items = await res.json();
        if (items.length === 0) return false;

        for (const item of items) {
            await fetch(`${API_URL}/${item.id}`, { method: "DELETE" });
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
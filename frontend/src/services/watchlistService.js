const API_URL = "http://localhost:3000/watchlist";

export const watchlistService = {
    async getAll(userId){
        const res = await fetch(`${API_URL}?userId=${userId}`);
        if (!res.ok) throw new Error("Films were not found...");

        return res.json();
    },

    async addToWatchlist(userId, filmId){
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

        if (!res.ok) throw new Error("Failed to add to watchlist...");
        return res.json();
    },

    async removeFromWatchlist(userId, filmId){
        const res = await fetch(`${API_URL}?userId=${userId}&filmId=${filmId}`);
        if (!res.ok) throw new Error("Failed to find watchlist items...");

        const items = await res.json();
        if (items.length === 0) return false;

        for (const item of items) {
            await fetch(`${API_URL}/${item.id}`, { method: "DELETE" });
        }

        return true;
    },

    async checkInWatchlist(userId, filmId) {
        const res = await fetch(`${API_URL}?userId=${userId}&filmId=${filmId}`);

        if (!res.ok) {
            throw new Error("Failed to check watchlist...");
        }

        const data = await res.json();
        return data.length > 0;     
    }
};
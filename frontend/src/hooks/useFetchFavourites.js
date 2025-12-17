import { useEffect, useState } from "react";
import { favouritesService } from "../services/favouritesService";

export function useFetchFavourites(userId) {
    const [favourites, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        favouritesService.getAll(userId)
            .then(setWatchlist)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [userId]);

    return { favourites, loading, error};
}

import { useState, useEffect } from "react";
import { filmsService } from "../services/filmsService";

export function useFetchFilmsByIds(ids) {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!ids || ids.length === 0) {
            setFilms([]);
            setLoading(false);
            return;
        }

        filmsService.getByIds(ids)
            .then(setFilms)
            .catch(setError)
            .finally(() => setLoading(false));

    }, [ids]);

    return { films, loading, error };
}
import axios from 'axios';
import React, { useCallback, useMemo } from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorite';

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

interface FavoriteButtonProps {
    movieId: string,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    movieId
}) => {

    const { mutate: mutateFavorites } = useFavorites();

    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId]);
 
    const toggleFavorites = useCallback(async () => {
        let response;

        if (isFavorite) {
            response = await axios.delete('/api/favorite', { data: { movieId } });
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }

        const updateFavoritesIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updateFavoritesIds
        });
        mutateFavorites();
    }, [isFavorite, mutate, currentUser, mutateFavorites, movieId]);
  

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div onClick={toggleFavorites}className='
            cursor-pointer
            group/item
            w-6
            h-6
            lg:w-10
            lg:h-10
            border-white
            border-2
            rounded-full
            flex
            justify-center
            items-center
            transition
            hover:border-neutral-300'
        >  
            <Icon className='text-white' size={25}/>
        </div>
    );
}

export default FavoriteButton;
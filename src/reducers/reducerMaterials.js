import React from 'react';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';

export default function() {
    return [
        {
            id: 51,
            name: 'allMaterials',
            title: 'Mam wszystkie materiały',
            desc: 'Zdjęcia i teksty na podstrony',
            discount: 0.2,
            discountTitle: 'Rabat -20%',
            icon: <PlaylistAddCheckIcon />
        },
        {
            id: 798,
            name: 'noneMaterials',
            title: 'Nie mam kompletu',
            desc: 'Materiały będą dosłane w czasie tworzenia strony',
            icon: <HourglassFullIcon />
        }
    ]
}
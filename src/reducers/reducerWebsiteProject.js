import React from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import DescriptionIcon from '@material-ui/icons/Description';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';

export default function() {
    return [
        // {
        //     id: 11,
        //     name: 'hasProject',
        //     title: 'Mam już projekt',
        //     price: 0,
        //     desc: "Jeżeli posiadasz już projekt graficzny do pocięcia i użycia w produkcji zlecenia",
        //     icon: <EmojiEmotionsIcon />
        // },
        {
            id: 79,
            name: 'businessCard',
            title: 'Wizytówka',
            price: 999,
            desc: "1 podstrona, do 10h pracy grafika",
            icon: <DescriptionIcon />
        },
        {
            id: 6,
            name: 'simpleProject',
            title: 'Prosty',
            price: 1750,
            desc: 'Do 5 podstron, do 20h pracy grafika',
            icon: <VerticalSplitIcon />
        },
        {
            id: 10,
            name: 'standardProject',
            title: 'Rozszerzony',
            price: 2250,
            desc: 'Do 10 podstron, do 30h pracy grafika',
            icon: <MenuBookIcon />
        },
        {
            id: 24,
            name: 'PremiumProject',
            title: 'Premium',
            price: 3500,
            desc: 'Do 15 podstron, do 50h pracy grafika',
            icon: <WebIcon />
        }  
    ]
}
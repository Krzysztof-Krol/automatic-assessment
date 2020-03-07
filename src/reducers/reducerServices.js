import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SpeedIcon from '@material-ui/icons/Speed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';

export default function() {
    return [
        {
            id: 43,
            name: 'website',
            title: 'Strona internetowa',
            icon: <WebIcon/>
        },
        {
            id: 795,
            name: 'shop',
            title: 'Sklep internetowy',
            icon: <StorefrontIcon/>
        },
        // {
        //     id: 16,
        //     name: 'optimization',
        //     title: 'Optymalizacja SEO',
        //     icon: <SpeedIcon />
        // },
        // {
        //     id: 93,
        //     name: 'positioning',
        //     title: 'Pozycjonowanie',
        //     icon: <TrendingUpIcon />
        // },
        // {
        //     id: 99,
        //     name: 'repair',
        //     title: 'Naprawa strony',
        //     icon: <BuildIcon />
        // },
        // {
        //     id: 38,
        //     name: 'application',
        //     title: 'Aplikacja internetowa',
        //     icon: <AppsIcon />
        
        // },
        {
            id: 31,
            name: 'other',
            title: 'Inne zlecenie',
            icon: <CodeIcon />
        }        
    ]
}
import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
// import SpeedIcon from '@material-ui/icons/Speed';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import BuildIcon from '@material-ui/icons/Build';
// import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';

export default function() {
    return [
        {
            id: 43,
            checked: false,
            name: 'website',
            title: 'Strona internetowa',
            icon: <WebIcon/>
        },
        {
            id: 795,
            checked: false,
            name: 'shop',
            title: 'Sklep internetowy',
            icon: <StorefrontIcon/>
        },
        // {
        //     id: 16,
        //     checked: false,
        //     name: 'optimization',
        //     title: 'Optymalizacja SEO',
        //     icon: <SpeedIcon />
        // },
        // {
        //     id: 93,
        //     checked: false,
        //     name: 'positioning',
        //     title: 'Pozycjonowanie',
        //     icon: <TrendingUpIcon />
        // },
        // {
        //     id: 99,
        //     checked: false,
        //     name: 'repair',
        //     title: 'Naprawa strony',
        //     icon: <BuildIcon />
        // },
        // {
        //     id: 38,
        //     checked: false,
        //     name: 'application',
        //     title: 'Aplikacja internetowa',
        //     icon: <AppsIcon />
        // },
        {
            id: 31,
            checked: false, 
            name: 'other',
            title: 'Inne zlecenie',
            icon: <CodeIcon />
        }        
    ]
}
import React from 'react';
import PhotoGallery from 'react-photo-gallery';

import Header from './header.component';

function AppContainer() {
    const photos = [{
        src: 'http://placekitten.com/200/300',
        width: 3,
        height: 4,
    },
    {
        src: 'http://placekitten.com/200/200',
        width: 1,
        height: 1,
    },
    {
        src: 'http://placekitten.com/300/400',
        width: 3,
        height: 4,
    },
    ];

    return (
        <>
            <Header />
            <PhotoGallery
                photos={photos}
            />
        </>
    );
}

export default AppContainer;
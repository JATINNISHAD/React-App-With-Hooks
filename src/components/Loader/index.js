import React from 'react';
import loaderSrc from '../../assets/images/loadingicon.gif';

const Loader = props =>(
    <div>
        <img
            alt="Loader Icon"
            src={loaderSrc}
        />
    </div>
)

export default Loader;
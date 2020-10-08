import React from 'react';

import '../../Styling/main_styling.scss';
import headerIcon from '../../Img/bookworm.png';

const HeaderContent = () => {
    return (
        <div className='header-container' >
            <img src={headerIcon} alt='Here should be header pic'/>
            <p>Bookworm</p>
        </div>
    );
}

export default HeaderContent;








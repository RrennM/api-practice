import React from 'react';

const RefreshButton = ({buttonClick}) => {
    return (
        <div className='tc'>
            <input 
                type="button" 
                value='Gimme More!' 
                onClick={buttonClick}
                className='bg-lightest-blue blue pa3 br3 f5 b'
            />
        </div>
    )
}

export default RefreshButton;
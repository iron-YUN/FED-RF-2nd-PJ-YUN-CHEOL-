import React from 'react';

function Check(props) {
    return (
        <div className="ch">
            <img src={`${process.env.PUBLIC_URL}/images/logo/check.png`} alt="check" />
        </div>
    );
}

export default Check;
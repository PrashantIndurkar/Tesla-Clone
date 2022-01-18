import React from 'react'
import "./HeaderBlock.css"
function HeaderBlock() {
    return (
    <div className='headerBlock'>
        <div className="headerBlock__info">
            <div className="headerBlock__infoText">
                <h1>Model 3</h1>
                <h4>Order Online for <span>Touchless Delivery</span></h4>
            </div>
            <div className="headerBlock__actions">
                <button className='headerBlock__buttonPrimary'>Custom Order</button>
                <button className='headerBlock__buttonSecondary'>existing Inventory</button>
            </div>
        </div>
    </div>
    )
}

export default HeaderBlock

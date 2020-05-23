import React from 'react'

import './footer.styles.scss'


const Footer = () => {
    return(
        <div className="footer">
            <p class="text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    )
}

export default Footer
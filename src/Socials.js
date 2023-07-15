import React, {useState} from 'react';
function Socials(props) {
    return (
        <table className='socials'>
            <tr>
                <td>
                   <a rel="noreferrer" target="_blank" href="https://instagram.com/bsostek">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a> 
                </td>
                <td>
                   <a rel="noreferrer" target="_blank" href="https://github.com/briansostek">
                        <ion-icon name="logo-github"></ion-icon>
                    </a> 
                </td>
                <td>
                   <a rel="noreferrer" target="_blank" href="https://linkedin.com/in/brian-sostek">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a> 
                </td>
            </tr>
        </table>
    )
}
export default Socials
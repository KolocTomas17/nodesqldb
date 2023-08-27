import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopBtn = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopBtn(true)
            }else{
                setBackToTopBtn(false)
            }
        })
    }, [])     

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <div>
            {backToTopBtn && (
<FontAwesomeIcon icon={faAngleUp} style={{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                fontSize: '50px',
                color: '#C6C2C2',
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                border: '2px solid #C6C2C2',
                backgroundColor: 'transparent',
                borderRadius: '50%',
                position: 'fixed    '
            }}  onClick={scrollUp} />
        )}
        
        </div>
        
    )
}

export default BackToTopBtn;
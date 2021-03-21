import React from 'react'

//Styles
import styles from '../../styles/Footer.module.css'

export default () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://api.whatsapp.com/send?phone=5571986237773&text=Fala,%20Vitor.%20Podemos%20conversar?"><i className="fab fa-whatsapp"></i></a>
                <a href="https://github.com/VitoorFranca"><i className="fab fa-github"></i></a>
            </div>
            <p className={styles.credits}>
                Developed by <a href="https://github.com/VitoorFranca"><strong>Vitor França</strong></a>
            </p>
            <p>
                &copy; 2021 <strong>Vitor França</strong>
            </p>
        </footer>
    )
}
import React from 'react'

// Components
import Head from '../head/Head'
import Header from '../header/Header'
import Footer from '../footer/Footer'

// Styles
import styles from '../../styles/Sobre.module.css'

export default () => {
    return (
        <>
            <Head title='Gerador de  Link para conversas diretas no whatsapp | [ Gerar Link de contato whatsApp ]' />
            <Header/>
                <div div className={styles.Sobre}>
                    <div className={styles.description}>
                        <p>O gerador de links para o WhatsApp é uma ótima ferramenta para ações de marketing ou relacionamento
                            é confiavel e serve para criar link para seu número de whatsapp.</p>

                            <p>Com o link para mensagens personalizadas do WhatsApp, você poderá utilizar em campanhas, redes sociais, email marketing, banners e etc.
                            Faça bom uso da ferramenta encurtadora de WhatsApp.</p>
                    </div>
                    <Footer />
            </div>
        </>
    )
}
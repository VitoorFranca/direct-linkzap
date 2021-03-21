import Head from 'next/head'
import React from 'react'

export default ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossorigin="anonymous" />
        </Head>
    )
}

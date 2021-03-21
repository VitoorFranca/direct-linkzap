import React, { useState } from 'react'

//Styles
import styles from '../../styles/Contents.module.css'

export default () => {

    const [ text, setText ] = useState('')
    const [ num, setNum ] = useState(null)
    const [ link, setLink ] = useState(null)
    const [ display, setDisplay ] = useState('none')
    const [ isIncorrect, setIsIncorrect ] = useState(false)
    const [isGenerated, setIsGenerated ] = useState(false)

        //Function generate a link or Show a Alert message
    function generateLink(number, message){

        number ? number = +number.split('').filter(n => n != ' ').join('') : null

        if(number){
            setIsGenerated(true)
            let messageFormated = window.encodeURIComponent(message) //Formats the message to link
            return `https://api.whatsapp.com/send?phone=${number}&text=${messageFormated}`
        } 
        else{
            setIsIncorrect(true)
            setTimeout(() => setIsIncorrect(false) , 3000)
        }
    }

    function generate(ev){
        ev.preventDefault() //Cancel default event
        setLink(generateLink(num, text)) //Set a new link
    }

    function copyLink(){
        let linkArea = document.querySelector('.link');
        linkArea.select();
        document.execCommand('copy');
        setDisplay('flex')
    }

    function generateNewLin(){
        setIsGenerated(false)
        setDisplay('none')
    }

    const ModalAlert = () => (
        <div className={styles.modalAlert}>
            <spam>Insira seu Numero</spam>
        </div>
    )
  

    return (
        <div className={styles.contents}>
            {isGenerated ? (
                <>

                    <div className={styles.modalLink}>
                        <p>Seu Link:</p>
                        <input type='text' value={link} className='link' />
                    </div>

                    <span id="sucsessText" style={{display: display}} className={styles.copiedSuccess}>Successful <i class='bx bx-check-circle' /></span>

                    <div className={styles.btsControls}>
                        <button className={styles.btn} 
                            onClick={copyLink}>Copiar Link</button>

                        <button className={styles.btn}
                            style={{width: '200px'}}
                            onClick={generateNewLin}>Gerar um novo link</button>
                    </div>

                </>
        ) : (
            <>
                <form className={styles.form}
                    onSubmit={generate}
                    action="">
    
                    <label htmlFor="numInput">Numero do Celular</label>
                    <input className={styles.inputNum}
                        id="numInput"
                        type="text"
                        placeholder='(DDD) 0 0000-0000'
                        value={num} 
                        onChange={e => setNum(e.target.value)}/>
    
                    <label htmlFor="txtInput" style={{marginTop: '10px'}}>Mensagem</label>
                    <input className={styles.inputText}
                        id="txtInput"
                        type="text"
                        placeholder='Escreva a Mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}/>
    
                    <input className={styles.btn}
                        type="submit"
                        value="Gerar Link" />
                </form>

                {isIncorrect && <ModalAlert />}

                <div className={styles.tutorial}>
                    <p>Tutorial rapido</p>
                    <label htmlFor="numInput"><span>1.</span> Insira o nº do WhatsApp Ex: 99 9 1234-5678</label> <br/>
                    <label htmlFor="txtInput"><span>2.</span> Escreva a mensagem que será exibida</label> <br/>
                    <label htmlFor="numInput"><span>3.</span> Clique no botão "<strong>GERAR LINK”</strong></label> <br/> 
                    <label htmlFor="numInput"><span>4.</span> Copie o link e compartilhe</label> <br/>
                </div>
                </>
        )}

            
        </div>
    )
}
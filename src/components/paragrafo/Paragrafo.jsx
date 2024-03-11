import './style.css'

function Paragrafo(props) {
    return (
        <p 
        className='texto'
        style={{color: props.cor}}>
            {props.texto}
        </p>
    )
}

Paragrafo.defaultProps = {
    texto: 'Esse é o texto do paragrafo',
    cor: 'red'
}

export default Paragrafo
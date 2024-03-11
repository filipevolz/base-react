import './style.css'

const Button = ({label, showLabel}) => {
    return (
         
        <button
        className="btn" 
        label={label}
        onClick={() => showLabel(label)}>
            Clique aqui
        </button>
    )
}

Button.defaultProps = {
    label: 'clicou no botão'
}


export default Button
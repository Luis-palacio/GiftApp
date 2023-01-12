import { useState } from "react"


export const AddCategory = ({ onNuevaCategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; 

        setInputValue('');
        onNuevaCategoria( inputValue.trim() );
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar gifts"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}

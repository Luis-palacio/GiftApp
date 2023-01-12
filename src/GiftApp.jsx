import { useState } from "react";
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from "./Components/GifGrid";

export const GiftApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    const onAddCategory = (nuevaCategoria) => {

        if (categorias.includes(nuevaCategoria)) return;


        setCategorias([nuevaCategoria, ...categorias]);
    }
    return (

        <>
            <h1>GiftApp</h1>

            <AddCategory onNuevaCategoria={(value) => onAddCategory(value)} />

            {
                categorias.map(categoria => (
                    <GifGrid key={categorias}
                        categoria={categoria} />
                ))
            }
        </>
    )
}
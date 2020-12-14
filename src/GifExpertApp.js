import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias = ['Yugioh', 'Halo', 'Pepsiman'];
    const [categorias, setCategorias] = useState(['Yugioh']);

    /*
    const handleAdd = () => {
        
        //setCategorias( [...categorias, 'Nemo'] );
        setCategorias(cats =>[...cats, 'Messi'] );

    }
    */

   return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={ setCategorias } />
        <hr />

        <ol>
            {
                categorias.map( category  => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>

    </>
)
}

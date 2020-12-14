import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem.';

export const GifGrid = ({ category }) => {

   // const [images, setimages] = useState([]);

   const {data:images, loading} = useFetchGifs( category );

    /*
    // se ejecuta la accion cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs( category )
            .then( setimages )
    }, [ category ]);
    */


    //getGifs();

    return (
        <>
            <h3 className=" animate__bounce"> { category } </h3>

            { loading && <p className=" animate__bounce">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>

    )
}

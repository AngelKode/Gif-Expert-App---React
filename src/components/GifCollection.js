import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifCollectionItem } from './GifCollectionItem';

export const GifCollection = ({category}) => {

    const {data : images,loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid"> 
                {
                    images.map((image) => ( 
                        <GifCollectionItem 
                            key = {image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifCollection.propTypes = {
    category : PropTypes.string.isRequired
}

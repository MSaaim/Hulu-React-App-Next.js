import React from 'react';
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move';

function Results({ results }) {
    return (
        <div className='px-5 my-10 sm:grid-cols-2 
        xl:grid-cols-3 2xl:flex flex-wrap justify-center '>
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results;
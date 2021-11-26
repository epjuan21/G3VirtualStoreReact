import React, { useEffect, useState } from 'react'

const Pagination = ({showPerPage, onPaginationChange, total}) => {
    
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)
    },[counter])

    const onButtonClick = (type) => {
        if(type === 'prev') {
            if(counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === 'next') {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }   
    }

    return (
        <div className="d-flex justify-content-between">
            <button onClick={() => onButtonClick('prev')} className="btn btn-primary">Anterior</button>
            <button onClick={() => onButtonClick('next')} className="btn btn-primary">Siguiente</button>
        </div>
    )
}

export default Pagination
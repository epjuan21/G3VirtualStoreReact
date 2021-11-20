import React from 'react'

export const ErrorMessage = ({ alertType = 'primary', children }) => {
    return (
        <>
            <div className={ `alert alert-${alertType}` } role="alert">
                <strong>{children}</strong>
            </div>
        </>
    )
}

import React from 'react'
import { wrapper } from './ColumnInnerWrapper.module.css'

export default function ColumnInnerWraper({ children, className }) {
    return (
        <div className={`${wrapper} ${className ? className : ''}`}>
            {children}
        </div>
    )
}

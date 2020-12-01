import React from 'react'
import { header } from './ColumnHeader.module.css'

export default function ColumnHeader({ children }) {
    return (
        <div className={header}>
            {children}
        </div>
    )
}

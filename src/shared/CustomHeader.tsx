import React from 'react'
import { Link } from 'react-router'

export const CustomHeader = () => {
  return (
    <>
        <header>
            <Link to="/inicio" className="back-link">
            <span>←</span> Volver al Inicio
            </Link>
        </header>
    </>
  )
}

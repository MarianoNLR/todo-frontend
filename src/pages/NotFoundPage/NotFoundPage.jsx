import './NotFoundPage.css'
import { Link } from 'react-router-dom'

export function NotFoundPage () {
    return (
        <>
        <main className='not-found-page-main'>
            <h1 className='error-title'>Error404: No se ha encontrado el recurso.</h1>
            <p className='error-text'>Oh no! Parece que te has perdido!</p>
            <Link to='/' className='link-text'>Volver a la Página Principal.</Link>
        </main>
        
        </>
    )
}
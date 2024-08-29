import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthProvider.jsx'
export function Header () {
    const {loadingUser, logout} = useAuth()
    const localStorageUser = JSON.parse(window.localStorage.getItem('user'))

    if (loadingUser) {
        return <></>
    }

    return (
        <header className='header'>
            {localStorageUser ?
                <div className="header-main-wrapper">
                    <Link to='/'>Logo</Link>
                    <div className="user-options-wrapper">
                        <Link onClick={logout}>Cerrar sesion</Link>
                    </div>
                </div>   
                :
                <div className="header-main-wrapper">
                    <Link to='/' className='header-logo'>Logo</Link>
                    <Link to='/login' className='header-login-link'>Inciar Sesión</Link>
                </div>
            }
        </header>
    )
}
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const pages = [
        {
            name: 'solusi',
            route: '/'
        },
        {
            name: 'jubelmoto',
            route: '/jubelmoto'
        },
        {
            name: 'mitra',
            route: '/mitra'
        },
        {
            name: 'pertanyaan',
            route: '/pertanyaan'
        },
        {
            name: 'tips',
            route: '/tips'
        },
    ]

    return (
        <div className="Header">
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src="assets/otomoto-light.png" alt="" />
                        {/* <img src="assets/otomoto-dark.png" alt="" /> */}
                    </Link>
                </div>
                <div className="router">
                    <ul>
                        {
                            pages.map((page, idx) => <li key={idx}><Link to={page.route} className={page.name}>{page.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
import './Header.css'
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'

const Header = (props) => {

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
        <div className={"Header" + (props.isView & (props.path === '/') ? " transparent" : "")}>
            <div className="wrapper">
                {/* <div className="logo">
                </div> */}
                <div className="router">
                    <ul>
                        <li>
                            <Link to="/">
                                {
                                    props.isView & (props.path === '/')
                                    ? <img src="assets/otomoto-light.png" alt="" />
                                    : <img src="assets/otomoto-dark.png" alt="" />
                                }
                            </Link>
                        </li>
                        {
                            pages.map((page, idx) => <li key={idx}><Link to={page.route}>{page.name}</Link></li>)
                        }
                    </ul>
                </div>
                {
                    (props.path !== '/') && (<div className="contact"><Contact /></div>)
                }
            </div>
        </div>
    )
}

export default Header;
import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'

const Header = (props) => {

    const [toggleShow, setToggleShow] = useState(false)

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
                <div className="desktop">
                    <div className="left">
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
                                    pages.map((page, idx) => <li key={idx}><Link className={props.path === page.route ? 'current' : ''} to={page.route}>{page.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        {
                            (props.path !== '/') && (<div className="contact"><Contact /></div>)
                        }
                        <div onClick={() => setToggleShow(!toggleShow)} className="burger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className={"mobile" + (toggleShow ? " show" : "")}>
                    <ul>
                        {
                            pages.map((page, idx) => <li className={props.path === page.route ? 'current' : ''} key={idx}><Link onClick={() => setToggleShow(!toggleShow)} to={page.route}>{page.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
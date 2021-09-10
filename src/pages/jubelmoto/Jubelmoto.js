import './Jubelmoto.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Jubelmoto = ({setPath}) => {
    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname)
    }, [setPath, pathname])

    return (
        <div className="Jubelmoto">
            <p>JUBELMOTO</p>
        </div>
    )
}

export default Jubelmoto

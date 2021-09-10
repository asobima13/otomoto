import './Jubelmoto.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import Filter from '../../components/filter/Filter';
import Items from '../../components/items/Items';
import Offer from '../../components/offer/Offer';
import Footer from '../../components/footer/Footer';
import Kiasan from '../../components/kiasan/Kiasan';

const Jubelmoto = ({setPath}) => {
    const { pathname } = useLocation()
    const pages = []
    for (let i = 1; i <= 8; i++) {
        pages.push(i)
    }

    useEffect(() => {
        setPath(pathname)
    }, [setPath, pathname])

    return (
        <div className="Jubelmoto">
            <div className="wrapper">
                <div className="urutkan">
                    <strong>Urutkan</strong>
                    <form>
                        <select name="sort" id="sort">
                            <option value="">Urutkan</option>
                            <option value="termurah">Harga Termurah</option>
                            <option value="termahal">Harga Termahal</option>
                            <option value="terlama">Tahun Terlama</option>
                            <option value="terbaru">Tahun Terbaru</option>
                        </select>
                    </form>
                </div>
                <div className="content">
                    <Filter />
                    <Items />
                </div>
                <ul className="pagination">
                    <li><div className="prev"><ArrowBackIos/></div></li>
                        {
                            pages.map(p => <li key={p}>{p}</li>)
                        }
                    <li>...</li>
                    <li>40</li>
                    <li>41</li>
                    <li><div className="next"><ArrowForwardIos/></div></li>
                </ul>
            </div>
            <Offer
                text="Jangan Ragu, jual beli dan tukar tambah di OTOMOTO"
                button={
                <a href="https://jubelmoto.otomoto.id/jual-kendaraan" className="button">
                    <p>Jual Motor</p>
                </a>
            }
            />
            <Kiasan />
            <Footer />
        </div>
    )
}

export default Jubelmoto

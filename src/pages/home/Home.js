import './Home.css'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocation, Link } from 'react-router-dom'
import Offer from '../../components/offer/Offer'

const Home = ({setIsView, setPath}) => {

    const [stateJabodetabek,  setStateJabodetabek] = useState(0)
    const [stateBandung,  setStateBandung] = useState(0)
    const [stateCirebon,  setStateCirebon] = useState(0)
    const {ref, inView} = useInView({threshold: 1})
    const {ref: ref2, inView: inView2} = useInView({threshold: .8})
    const { pathname } = useLocation()

    useEffect(() => {
        inView ? setIsView(true) : setIsView(false)
    }, [setIsView, inView])

    useEffect(() => {
        setPath(pathname)
    }, [setPath, pathname])

    useEffect(() => {
        
        const bengkel = [
            {
                lokasi: 'Jabodetabek',
                jumlah: 100
            },
            {
                lokasi: 'Bandung',
                jumlah: 40
            },
            {
                lokasi: 'Cirebon',
                jumlah: 20
            }
        ]

        if (inView2) {
            const counter = (numb, state, setState) => {
                if (state === 0) {
                    setTimeout(() => {
                        setState(state + 1)
                    }, 500);
                } else if (state < (numb - 5)) {
                    setTimeout(() => {
                        setState(state + 1)
                    }, 10);
                } else if (state > (numb - 6) & state < numb) {
                    setTimeout(() => {
                        setState(state + 1)
                    }, 100);
                }
            }

            counter(bengkel[0].jumlah, stateJabodetabek, setStateJabodetabek)
            counter(bengkel[1].jumlah, stateBandung, setStateBandung)
            counter(bengkel[2].jumlah, stateCirebon, setStateCirebon)
        }
    }, [
        stateJabodetabek,
        stateBandung,
        stateCirebon,
        setStateJabodetabek,
        setStateBandung,
        setStateCirebon,
        inView2
    ])

    return (
        <div className="Home">
            <div ref={ref} className="header-img" style={{backgroundImage: "url(assets/aset-homepage-copy.jpg)"}}>
                <div className="wrapper">
                    <div className="text">
                        <p>Selalu Ada Solusi<br/>di Setiap Situasi</p>
                    </div>
                </div>
            </div>
            <div className="bengkel">
                <div className="wrapper">
                    <div className="top">
                        <h1>OTOMOTO Bekerjasama dengan Bengkel Terpercaya</h1>
                        <p>Kami memiliki +100 bengkel yang telah bekerjasama di area Jabodetabek untuk menghadirkan harga motor terbaik dan informasi lengkap untuk bikers</p>
                    </div>
                    <div ref={ref2} className="bottom">
                        <div className="item">
                            <p className="angka">{stateJabodetabek}</p>
                            <p className="lokasi">Jabodetabek</p>
                        </div>
                        <div className="item">
                            <p className="angka">{stateBandung}</p>
                            <p className="lokasi">Bandung</p>
                        </div>
                        <div className="item">
                            <p className="angka">{stateCirebon}</p>
                            <p className="lokasi">Cirebon</p>
                        </div>
                    </div>
                </div>
            </div>
            <Offer
                text="Dapatkan pengasilan tambahan bersama OTOMOTO"
                button={
                    <Link to="/mitra" className="button">
                        <p>Daftar Agen Moto</p>
                    </Link>
                }
            />
            <Footer />
        </div>
    )
}

export default Home

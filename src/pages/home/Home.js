import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {

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

    return (
        <>
            <Header />
            <div className="Home">
                <div className="header-img" style={{backgroundImage: "url(assets/aset-homepage-copy.jpg)"}}>
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
                        <div className="bottom">
                            {
                                bengkel.map((bkl, idx) => (
                                    <div key={idx} className="item">
                                        <p className="angka">{bkl.jumlah}</p>
                                        <p className="lokasi">{bkl.lokasi}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="agen">
                    <div className="wrapper">
                        <p className="sentence">Dapatkan pengasilan tambahan bersama OTOMOTO</p>
                        <div className="button">
                            <p>Daftar Agen Moto</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home

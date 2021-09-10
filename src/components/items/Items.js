import './Items.css'
import { useState, useEffect } from 'react'

const Items = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        
        const data = {
            nama: ['aerox', 'beat', 'lexi', 'pcx', 'vespa'],
            trip: ['999 KM', '20.999 KM', '13.089 KM', '745 KM', '203 KM'],
            tahun: ['2020', '2005', '2007', '2018', '2021'],
            kota: ['Jakarta Selatan', 'Karawang', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara'],
            harga: ['Rp 25.000.000', 'Rp 12.000.000', 'Rp 34.000.000', 'Rp 36.000.000', 'Rp 42.000.000']
        }
    
        const getItems = () => {
            const getRandom = () => {
                return Math.floor(Math.random() * 5);
            }

            setItems([
                ...items,
                {
                    nama: data.nama[getRandom()],
                    trip: data.trip[getRandom()],
                    tahun: data.tahun[getRandom()],
                    kota: data.kota[getRandom()],
                    harga: data.harga[getRandom()],
                }
            ])
        }

        if (items.length < 25) {
            getItems();
        }

    }, [items, setItems])

    return (
        <div className="Items">
            {
                items.map((item, idx) => (
                    <div key={idx} className="motor">
                        <div className="img">
                            <img src={`assets/motor/${item.nama}.jpg`} alt="" />
                        </div>
                        <div className="txt">
                            <p className="title"><strong>{item.nama}</strong></p>
                            <p>{item.trip}</p>
                            <p>{item.tahun}</p>
                            <p><strong>{item.kota}</strong></p>
                            <p><strong>{item.harga}</strong></p>
                        </div>
                    </div>
            ))
            }
        </div>
    )

    // const items = [
    //     {
    //         name: ['Aerox'],
    //         trip: '999 KM',
    //         tahun: '2020',
    //         kota: 'Jakarta Selatan',
    //         harga: 'Rp 25.000.000',
    //         img: 'assets/aerox.jpg'
    //     },
    //     {
    //         item: 'Beat',
    //         trip: '20.999 KM',
    //         tahun: '2005',
    //         kota: 'Karawang',
    //         harga: 'Rp 12.000.000',
    //         img: 'assets/beat.jpg'
    //     },
    //     {
    //         item: 'Lexi',
    //         trip: '13.089 KM',
    //         tahun: '2007',
    //         kota: 'Jakarta Timur',
    //         harga: 'Rp 34.000.000',
    //         img: 'assets/lexi.jpg'
    //     },
    //     {
    //         item: 'Pcx',
    //         trip: '745 KM',
    //         tahun: '2020',
    //         kota: 'Jakarta Barat',
    //         harga: 'Rp 36.000.000',
    //         img: 'assets/pcx.jpg'
    //     },
    //     {
    //         item: 'Vespa',
    //         trip: '203 KM',
    //         tahun: '2021',
    //         kota: 'Jakarta Utara',
    //         harga: 'Rp 42.000.000',
    //         img: 'assets/vespa.jpg'
    //     }
    // ]
}

export default Items

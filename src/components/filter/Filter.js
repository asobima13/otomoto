import './Filter.css'
import { useState } from 'react'
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Filter = () => {

    const [toggleLokasi, setToggleLokasi] = useState(false)

    const displayStyle = {
        display: 'block'
    }

    const hideStyle = {
        display: 'none'
    }

    return (
        <div className="Filter">
            <div className="head">
                <strong>Filter</strong>
            </div>
            <div className="harga">
                <strong>Harga</strong>
                <input type="text" placeholder="Harga Minimal" />
                <input type="text" placeholder="Harga Maksimal" />
            </div>
            <div className="lokasi">
                <div onClick={() => setToggleLokasi(!toggleLokasi)} className="toggle">
                    <strong>Lokasi</strong>
                    {toggleLokasi ? <ExpandLess /> : <ExpandMore/>}
                </div>
                <div className="toggle-box" style={toggleLokasi ? hideStyle : displayStyle}>
                    <input type="checkbox" id="jaktim" value="jaktim"/>
                    <label for="jaktim">Jakarta Timur</label><br/>
                    <input type="checkbox" id="bekasi" value="bekasi"/>
                    <label for="bekasi">Kota Bekasi</label><br/>
                    <input type="checkbox" id="jaksel" value="jaksel"/>
                    <label for="jaksel">Jakarta Selatan</label><br/>
                    <input type="checkbox" id="jakbar" value="jakbar"/>
                    <label for="jakbar">Jakarta Barat</label><br/>
                    <input type="checkbox" id="tangerang" value="tangerang"/>
                    <label for="tangerang">Kota Tangerang</label><br/>
                    <p><strong>Lihat Semua</strong></p>
                </div>
            </div>
            <div className="grade">
                <div className="toggle">
                    <strong>Grade</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="kategori">
                <div className="toggle">
                    <strong>Kategori</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="kondisi">
                <div className="toggle">
                    <strong>Kondisi</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="brand">
                <div className="toggle">
                    <strong>Brand</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="jarak-tempuh">
                <div className="toggle">
                    <strong>Jarak Tempuh</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="tahun">
                <div className="toggle">
                    <strong>Tahun</strong>
                    <ExpandLess/>
                </div>
            </div>
            <div className="submit">
                <input type="submit" className="filter-button" value="Filter"/>
            </div>
        </div>
    )
}

export default Filter

import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="top">
                <div className="baris baris1">
                    <img src="assets/footer-logo.png" alt="" />
                </div>
                <div className="baris baris2">
                    <img src="assets/otomoto-light.png" alt="" />
                    <p>Customer Service</p>
                    <a href="mailto:">info@otomot.id</a>
                    <a href="tel:+6281387777876">0813 8777 7876</a>
                </div>
                <div className="baris baris3">
                    <Link to="/about">Tentang Kami</Link>
                    <Link to="/mitra">Partner</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/promo">Promo</Link>
                    <Link to="/contact">Hubungi Kami</Link>
                    <Link to="/syarat">Syarat & Ketentuan</Link>
                </div>
                <div className="baris baris4">
                    <a href="#section-booking-service">Services</a>
                    <a href="#section-booking-service">Booking Service</a>
                    <a href="#section-price-engine">Price Engine Smart</a>
                    <a href="#section-inspection-pro">Inspection Pro</a>
                    <a href="#section-loan">Loan</a>
                </div>
                <div className="baris baris5">
                    <p>Download</p>
                    <p>OTOMOTO Indonesia</p>
                    <a href="http://bit.ly/2fOBWhN">
                        <img src="assets/btn-google-play-150-44.png" alt="" />
                    </a>
                    <a href="https://apple.co/2NLb0zQ">
                        <img src="assets/btn-app-store-150-44.png" alt="" />
                    </a>
                </div>
                <div className="baris baris6">
                    <p>IKUTI KAMI</p>
                    <div className="sosmed">
                        <a href="http://bit.ly/facebookotomoto">
                            <img src="assets/social-fb.png" alt="" />
                        </a>
                        <a href="http://bit.ly/instagramotomoto">
                            <img src="assets/social-ig.png" alt="" />
                        </a>
                        <a href="http://bit.ly/youtubeotomoto">
                            <img src="assets/social-yt.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>&copy; 2021 OTOMOTO Indonesia</p>
            </div>
        </div>
    )
}

export default Footer

import './Offer.css'

const Offer = ({text, button}) => {
    return (
        <div className="Offer">
            <div className="wrapper">
                <p className="sentence"><strong>{text}</strong></p>
                {button}
            </div>
        </div>
    )
}

export default Offer

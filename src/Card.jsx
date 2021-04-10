
function Card(props){
    return(
        <>
        <div className="card_container">
            <div className="card">
                <img src={props.image} className="image" alt="cardimage"/>
                <div className="card_info">
                    <span className="subtitle">{props.subtitle}</span>
                    <h3 className="cardTitle">{props.title}</h3>
                    <a href ={props.seriesLink} target="_blank" rel="noreferrer">
                        <button className="watch_btn">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card
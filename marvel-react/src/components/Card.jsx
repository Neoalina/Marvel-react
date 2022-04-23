import './Card.css'


function Card(props) {
    return (
        <div className="card">
            <h2 className="card-title" id="heroName">{props.title}</h2>
            <div className="card-img">
                <img src={props.url} alt={props.title} />
            </div>
            <div className="discription"> Вселенная:
                <div className="universe">{props.universe}</div>
            </div>
            <div className="discription">Альтер эго:
                <div className="alter_ego">{props.alter_ego}</div>
            </div>
            <div className="discription">Род деятельности:
                <div className="occupation">{props.occupation}</div>
            </div>
            <div className="discription">Друзья:
                <div className="friends">{props.friends}</div>
            </div>
            <div className="discription">Суперсилы:
                <div className="power">{props.power}</div>
            </div>
            <div className="discription">Подробнее:
                <div className="detail">{props.detail}</div>
            </div>
        </div>
    )
}
export default Card;
import { Component } from "react";
import './card-list.style.css';

class Card extends Component {

    render(){
        const {name , id , email} = this.props;
        return(
            <div className="card-container" key={id}>
            <img 
                alt="monster"
                src={`https://robohash.org/${id}?size=180x180`}
            />
            <h2>{name}</h2>
            <h3>{email}</h3>
            </div>
        );
    }
}
export default Card;
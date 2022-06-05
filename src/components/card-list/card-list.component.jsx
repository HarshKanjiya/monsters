import { Component } from "react";
import './card-list.style.css';
import Card from "./card.innercomponent";


class CardList extends Component{
    render(){
        const { monsters } = this.props;
        return(
            <div className="card-list">
                {monsters.map((monster) => {
                    
                    const { name ,id , email } = monster;
                    return (
                        

                            
                            <Card name={name} id={id} email={email} />

                    
                        )
                })}
            </div>
        )
    }
}


export default CardList;
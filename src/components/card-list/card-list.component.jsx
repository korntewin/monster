import React, {Component} from "react"
import {Card} from "../card/card.components"
import './card-list.styles.css'

export const CardList = props => {
    console.log(props)
    return (
        <div className = 'card-list'> 
            {props.heroes.map(hero =>
                <Card key={hero.id} hero={hero} />
            )}
        </div>
    )
}

// export function CardList(props) {
//     console.log(props)
//     return (
//         <div className = "card-list"> {props.children} </div>
//     )
// }

// export class CardList extends Component {
//     constructor(props){
//         super()
//         this.props = props
//     }

//     render() {
//         return(
//             <div className = "card-list"> {this.props.children} </div>
//         )
//     }
// }
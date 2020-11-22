import React from 'react';
class Card extends React.Component{
    render(){
        return (
            <div className='card '>
                <div className={"card-header bg-"+ this.props.tipe +" text-white"}>
                    <h2>{ this.props.title }</h2>
                </div>
                <div className="card-body">
                    { this.props.children }
                </div>

            </div> 
        )
    }
}
export default Card;
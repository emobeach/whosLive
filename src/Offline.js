import React from 'react';

class Offline extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: this.props.stream.to_name
        }
    }

    render(){
        return(
            <li>
                <h2>{this.state.user_name}</h2>                
                <h2>offline widepeepoSad</h2>
            </li>
        )
    }
}

export default Offline
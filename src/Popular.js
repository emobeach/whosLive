import axios from 'axios';
import React from 'react';
import Stream from './Stream'
const BASE_URL = 'https://api.twitch.tv/helix/'
const CLIENT_ID = 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
const TWITCH_SECRET = '62y8kjf7gtvmrt15a5g4y824z41yyu'
const ACCESS_TOKEN = 'k3thjiyckgd81gbd46radyq33eu7ay'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`
axios.defaults.headers.common['Client-Id'] = CLIENT_ID


class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    async getPopular(){
        const res = await axios.get(BASE_URL + 'streams')
        this.setState({popular: res.data.data})
    }

    componentDidMount(){
        this.getPopular()
    }

    render(){
        return(
            <ul>
                {this.state.popular && this.state.popular.map( stream => (
                    <Stream stream = {stream}/>
                ))}
            </ul>
        )
    }
}
export default Popular
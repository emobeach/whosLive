import axios from 'axios';
import React from 'react';
import './App.css'
const BASE_URL = 'https://api.twitch.tv/helix/'
const CLIENT_ID = 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
const TWITCH_SECRET = '62y8kjf7gtvmrt15a5g4y824z41yyu'
const ACCESS_TOKEN = 'k3thjiyckgd81gbd46radyq33eu7ay'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`
axios.defaults.headers.common['Client-Id'] = CLIENT_ID


class Stream extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thumbnail_url: this.props.stream.thumbnail_url.slice(0, -20) +'160x90.jpg',
            user_name: this.props.stream.user_name,
            title: this.props.stream.title,
            game_name: this.props.stream.game_name,
            viewer_count: this.props.stream.viewer_count

        }
    }

    render(){
        return(
            <li>
                {this.state && <div class="online">
                    <img class="thumbnail" src={this.state.thumbnail_url} alt="Kappa"/>
                    <div class="live-user">{this.state.user_name}</div>
                    <div class="title">{this.state.title} </div>
                    <div class="game">{this.state.game_name}</div>
                    <div class="viewers">{this.state.viewer_count} Viewers</div>
                    <button>Link</button>
                </div> }
            </li>
        )
    }
}

export default Stream
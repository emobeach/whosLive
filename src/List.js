import axios from 'axios';
import React from 'react';
const BASE_URL = 'https://api.twitch.tv/helix/'
const CLIENT_ID = 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
const TWITCH_SECRET = '62y8kjf7gtvmrt15a5g4y824z41yyu'
const ACCESS_TOKEN = 'k3thjiyckgd81gbd46radyq33eu7ay'
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`
axios.defaults.headers.common['Client-Id'] = CLIENT_ID

/*function isLive(follows){
    let liveList = []
    for(let stream of follows){
        console.log(stream)
        liveCheck.user_id = stream.to_id
        console.log(liveCheck)
        axios.get('https://api.twitch.tv/helix/streams' + `?user_id=${stream.to_id}`).then(res => {
            if(res.data.data.length > 0){
                console.log(`${stream.user_id} is Live!`)
                liveList.push(res.data.data)
            } else {
                console.log(`${stream.user_id} is Not Live!`)

            }
        })
    }
    return liveList
}*/


class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    isLive(follows = []){
        console.log("IsLive now working")
        console.log(follows)
        let liveList = []
        let offlineList = []
        for(let stream of follows){
            console.log(stream)
            //liveCheck.user_id = stream.to_id
            //console.log(liveCheck)
            axios.get('https://api.twitch.tv/helix/streams' + `?user_id=${stream.to_id}`).then(res => {
                if(res.data.data.length > 0){
                    console.log(`${stream.user_id} is Live!`)
                    liveList.push(res.data.data)
                } else {
                    console.log(`${stream.user_id} is Not Live!`)
                    offlineList.push(res.data.data)
                }
            })
        }
        //this.setState({live: liveList})
        //this.setState({offline: offlineList})
    }
    
    
    componentDidMount(){
        this.isLive(this.props.follows)
    }
    //async getLive(props)
    render(){
        return(
            <h1>hi</h1>
        )
    }
}



export default List;
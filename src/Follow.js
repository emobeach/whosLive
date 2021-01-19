import { getAllByDisplayValue } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import List from './List'
const BASE_URL = 'https://api.twitch.tv/helix/'
const CLIENT_ID = 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
const TWITCH_SECRET = '62y8kjf7gtvmrt15a5g4y824z41yyu'
const ACCESS_TOKEN = 'k3thjiyckgd81gbd46radyq33eu7ay'
const followOptions = {
    method: 'GET',
    url: 'https://api.twitch.tv/helix/users/follows',
    params: {
        from_id: '414415586',
        after: ''
    },
    headers: {
      Authorization: 'Bearer k3thjiyckgd81gbd46radyq33eu7ay',
      'Client-Id': 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
    }
  };
const liveCheck = {
    method: 'GET',
    url: 'https://api.twitch.tv/helix/streams',
    params: {
        user_id: ''
    },
    headers: {
        Authorization: 'Bearer k3thjiyckgd81gbd46radyq33eu7ay',
        'Client-Id': 'kavo7ux6fwiw93nkh9k5lk9i8rqrp5'
    }
}
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`
axios.defaults.headers.common['Client-Id'] = CLIENT_ID

function getUsers(data = []){
    return axios.request(followOptions).then(res => {
        console.log("res length = " + res.data.data.length)
        if (res.data.data.length < 20){
            console.log("ENDING RECURSION")
            data.push(res.data.data)
            return data
        }
        console.log(res.data.data.length)
        data.push(res.data.data)
        try {
            if(res.data.pagination.cursor === followOptions.params.after) return data 
            followOptions.params.after = res.data.pagination.cursor
            return getUsers(data)
        }catch(e){
            console.error(e)
        }
        return data
    })
}
function followCleanup(data){
    let clean = []
    for(let i in data){
        for(let stream of data[i]){
            clean.push(stream)
        }
    }
    return clean
}

function isLive(follows){
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
}

function liveCleanup(data){
    console.log("preclean")
    console.log(data)
    let clean
    for(let i in data){
        console.log(data[i])
        clean.push(data[i][0])
    }
    console.log("postclean")
    console.log(clean)
    return clean
}



class Follow extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount(){
        getUsers().then(data => {
            console.log(data)
            //isLive(followCleanup(data)).then(res => {
            //    this.setState({live: liveCleanup(res)})
            //})
            //this.setState({live: liveCleanup(isLive(followCleanup(data)))})
            this.setState({follows: followCleanup(data)})
        }).then( () => {

        })

        /*isLive(['7236692']).then(data => {
            console.log("isLive = " + data)
        })*/
        
    }

    render(){
        return(
            <div>
                <ul>
                    <List follows = {this.state.follows}/>
                </ul>
            </div>
        )
    }

}

export default Follow
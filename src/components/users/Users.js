import React, { Component } from 'react'
import Axios from 'axios';

export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    login: "mojombo",
                    id: 1,
                    node_id: "MDQ6VXNlcjE=",
                    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/mojombo",
                    html_url: "https://github.com/mojombo",
                    followers_url: "https://api.github.com/users/mojombo/followers",
                    following_url: "https://api.github.com/users/mojombo/following{/other_user}",
                    gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
                    organizations_url: "https://api.github.com/users/mojombo/orgs",
                    repos_url: "https://api.github.com/users/mojombo/repos",
                    events_url: "https://api.github.com/users/mojombo/events{/privacy}",
                    received_events_url: "https://api.github.com/users/mojombo/received_events",
                    type: "User",
                    site_admin: false
                },
                {
                    login: "defunkt",
                    id: 2,
                    node_id: "MDQ6VXNlcjI=",
                    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/defunkt",
                    html_url: "https://github.com/defunkt",
                    followers_url: "https://api.github.com/users/defunkt/followers",
                    following_url: "https://api.github.com/users/defunkt/following{/other_user}",
                    gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
                    organizations_url: "https://api.github.com/users/defunkt/orgs",
                    repos_url: "https://api.github.com/users/defunkt/repos",
                    events_url: "https://api.github.com/users/defunkt/events{/privacy}",
                    received_events_url: "https://api.github.com/users/defunkt/received_events",
                    type: "User",
                    site_admin: false
                },
                {
                    login: "pjhyett",
                    id: 3,
                    node_id: "MDQ6VXNlcjM=",
                    avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/pjhyett",
                    html_url: "https://github.com/pjhyett",
                    followers_url: "https://api.github.com/users/pjhyett/followers",
                    following_url: "https://api.github.com/users/pjhyett/following{/other_user}",
                    gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
                    organizations_url: "https://api.github.com/users/pjhyett/orgs",
                    repos_url: "https://api.github.com/users/pjhyett/repos",
                    events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
                    received_events_url: "https://api.github.com/users/pjhyett/received_events",
                    type: "User",
                    site_admin: false
                }
            ]
        }
    }
    getUsers = () => {
        const usersUrl = "https://api.github.com/users";
        Axios.get( usersUrl ).then( res => {
            this.setState({
                users: res.data
            });
        });
    }
    componentDidMount() {
        this.getUsers() ;
    }
    render() {
        return (
            <div>
                <div className="row"> 
                    {this.state.users.map(user => (
                        <div className="col-md-3">
                            <div className="card">
                                <img src={user.avatar_url} alt="Logo" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title">{user.login}</h4>
                                    <p className="card-text">
                                        <a target="_blank" href={user.html_url} className="btn btn-success  btn-sm mr-2">Show more</a>
                                        <a target="_blank" href={user.repos_url} className="btn btn-danger btn-sm">Repositories</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default Users

import Api from './api';
import React from 'react';
import { PostList } from './post-list';

export default class CategoryPosts extends PostList{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        let api = new Api();

        api.posts({
            category: this.props.match.params.id
        }).then(data => {
            this.setState({
                posts: data
            })
        })        
    }
}
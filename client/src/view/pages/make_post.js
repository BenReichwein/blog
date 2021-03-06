import React, { Component } from 'react'

import history from '../../services/history'
import {createBlog} from '../../actions/index'

export default class MakePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: `
            <h1 class="text-2xl font-bold pb-3">Introduction</h1>
            <p class="pb-3">Introduction Text</p>
            <h1 class="text-2xl font-bold pb-3">Heading</h1>
            <p class="pb-3">Heading Text</p>
            <p class="pb-3">Heading Text</p>
            <p class="pb-3">Heading Text</p>
            <h1 class="text-2xl font-bold pb-3">Conclusion</h1>
            <p class="pb-3">Conclusion Text</p>
            `,
            description: '',
            topics: '',
            title: '',
            image: ''
        };
    }

    componentDidMount() {
        if (this.props.match.params.id !== "arielscool") {
            history.push('/')
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }

    // Uploading blog to database
    uploadBlog = () => {
        let {title, topics, description, blog, image} = this.state
        createBlog(title, topics, description, blog, image)
    };

    render() {
        return (
            <div>
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Blog</h3></div>
                <textarea 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                wrap="soft"
                rows="8"
                cols="50"
                name="blog"
                value={this.state.blog}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Description</h3></div>
                <textarea placeholder="short sum up of the Blog" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                wrap="soft"
                rows="3"
                cols="50"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Topics</h3></div>
                <input placeholder="Topic, Topic, Topic" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                name="topics"
                value={this.state.topics}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Title</h3></div>
                <input placeholder="A good eye grabbing title" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Image</h3></div>
                <input placeholder="image link (copy link address)" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                name="image"
                value={this.state.image}
                onChange={this.handleInputChange}
                />
                <button class="bg-purple-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-600
                shadow-lg"
                onClick={()=>this.uploadBlog()}
                >
                    Upload Blog
                </button>
            </div>
        )
    }
}

import React, { Component } from 'react'

import history from '../../services/history'
import {createBlog} from '../../actions/index'

export default class MakePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: '',
            description: '',
            topics: '',
            title: '',
            picturePreview: null,
            pictureAsFile: null,
            previousFile: null
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

    // handling change when image is added to input
    uploadPicture = (e) => {
        this.setState({
            /* contains the preview, if you want to show the picture to the user
               you can access it with this.state.picturePreview */
            picturePreview : URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile : e.target.files[0]
        })
    };
    // Uploading blog to database
    uploadBlog = () => {
        let {title, topics, description, blog, pictureAsFile} = this.state
        createBlog(title, topics, description, blog, pictureAsFile)
    };

    render() {
        return (
            <div>
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Blog</h3></div>
                <textarea placeholder="This is where you write your blog" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                wrap="soft"
                rows="8"
                cols="50"
                name="blog"
                value={this.state.blog}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Description</h3></div>
                <textarea placeholder="This is where you write your description" 
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
                <input placeholder="Short ish title" 
                class="text-grey-darkest flex-1 p-3 w-full bg-transparent resize-none border-purple-200" 
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                />
                <div class="box__title bg-gray-200 px-3 py-2 border-b"><h3 class="text-sm text-grey-darker font-medium">Image</h3></div>
                <div>
                    <img crossOrigin='anonymous' className="object-cover h-64 w-full" id={'img'} src={this.state.picturePreview} alt=""/>
                </div>
                <div className="flex flex-col shadow my-4">
                    <input 
                    type="file" 
                    name="file" 
                    onChange={this.uploadPicture} 
                    multiple
                    accept="image/png, image/jpeg"/>
                </div>
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

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux';
import React, { Component } from 'react'

import {getPost, createComment} from '../../actions'
import Sidebar from '../components/sidebar'
import TextHeader from '../components/text_header'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount = () => {
        this.props.getPost(this.props.match.params.id)
    }

    render() {
        let {post} = this.props
        return (
            <div>
                {/* Text Header */}
                <TextHeader/>

                <div class="container mx-auto flex flex-wrap py-6">
                    <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                        {post ? 
                            <article class="flex flex-col shadow my-4">
                                {/* Article Image */}
                                <a href="#" class="hover:opacity-75">
                                    <img src={`http://localhost:8080/api/img/${post.image}`}/>
                                </a>
                                <div class="bg-white flex flex-col justify-start p-6">
                                    <a href="#" class="text-purple-500 text-sm font-bold uppercase pb-4">{post.topic}</a>
                                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
                                    <p href="#" class="text-sm pb-8">
                                        By <a href="#" class="font-semibold hover:text-gray-800">Ariel Bolton</a>
                                    </p>
                                    <div dangerouslySetInnerHTML={{__html: post.blog}}></div>
                                </div>
                            </article>
                        : null }

                        <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 p-6">
                            <div class="flex-1 flex flex-col justify-center md:justify-start">
                                <p class="font-semibold text-purple-500 text-2xl">Comment</p>
                                <div class="relative text-gray-700 mt-5">
                                    <input class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-500 border rounded-lg focus:shadow-outline" 
                                    type="text" 
                                    name="comment" 
                                    placeholder="That was awesome! Write about 'this' next"
                                    onChange={this.handleInputChange}
                                    value={this.state.comment}
                                    />
                                    <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-purple-400 rounded-r-lg hover:bg-purple-500 focus:bg-purple-700"
                                    onClick={()=> this.props.createComment(this.props.match.params.id, this.state.comment)}
                                    >
                                        Post
                                    </button>
                                </div>
                                <span class="text-xs text-red-700" id="passwordHelp">Sign the comment with your name</span>
                            </div>
                        </div>
                        {/* Comments */}
                        {post ? 
                        post.comments.map((value, index) => {
                            return (
                                <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-5 mb-5 p-6">
                                    <div class="flex-1 flex flex-col justify-center md:justify-start">
                                        <p class="font-semibold text-2xl">Commenter</p>
                                        <p class="pt-2">{value}</p>
                                    </div>
                                </div>
                            )
                        }) : null }
                    </section>
                    {/* Sidebar */}
                    <Sidebar/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {post: state.post}
}

export default connect(mapStateToProps, {getPost, createComment})(Post)
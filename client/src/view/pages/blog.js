/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux';
import React, { Component } from 'react'

import {allBlogs} from '../../actions'
import Sidebar from '../components/sidebar'
import TextHeader from '../components/text_header'

class Blog extends Component {

    componentDidMount = () => {
        this.props.allBlogs()
    }

    render() {
        let {blog} = this.props
        console.log(blog)
        return (
            <div>
                {/* Text Header */}
                <TextHeader/>

                <div class="container mx-auto flex flex-wrap py-6">
                    <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                            {/* Article Image */}
                            {blog ? 
                            blog.map((value, index) => {
                                console.log(value)
                                return (
                                    <article class="flex flex-col shadow my-4 w-full">
                                        <a href={`/post/${value._id}`} class="hover:opacity-75">
                                            <img src={value.image} className="object-cover w-full"/>
                                        </a>
                                        <div class="bg-white flex flex-col justify-start p-6">
                                            <a href={`/post/${value._id}`} class="text-purple-500 text-sm font-bold uppercase pb-4">{value.topics}</a>
                                            <a href={`/post/${value._id}`} class="text-3xl font-bold hover:text-gray-700 pb-4">{value.title}</a>
                                            <p href={`/post/${value._id}`} class="text-sm pb-3">
                                                By <a href={`/post/${value._id}`} class="font-semibold hover:text-gray-800">Ariel Bolton</a>
                                            </p>
                                            <a href={`/post/${value._id}`} class="pb-6">{value.description}</a>
                                            <a href={`/post/${value._id}`} class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </article>
                                )
                            }) : null }

                        {/* Pagination */}
                        <div class="flex items-center py-8">
                            <a href="#" class="h-10 w-10 bg-purple-400 hover:bg-purple-500 font-semibold text-white text-sm flex items-center justify-center">1</a>
                            <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-purple-500 hover:text-white text-sm flex items-center justify-center">2</a>
                            <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
                        </div>
                    </section>

                    {/* Sidebar Section */}
                    <Sidebar/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {blog: state.blog}
}

export default connect(mapStateToProps, {allBlogs})(Blog)
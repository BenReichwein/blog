/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux';
import React, { Component } from 'react'

import image from '../../assets/undraw_Gardening_eaf3.svg'
import {register} from '../../actions'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    onSubmit = () => {
        this.props.register({
            username: this.state.username,
            password: this.state.password
        });
    };

    handleInputChange = (event) => {
        const { value, id } = event.target;
        this.setState({
            [id]: value
        });
    }

    render() {
        return (
            <div class="lg:flex">
                <div class="lg:w-1/2 xl:max-w-screen-sm">
                    <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                        <div class="cursor-pointer flex items-center">
                            <div class="text-2xl text-purple-600 tracking-wide ml-2 font-semibold">Ariel Bolton</div>
                        </div>
                    </div>
                    <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                        <h2 class="text-center text-4xl text-purple-400 font-display font-semibold lg:text-left xl:text-5xl
                        xl:text-bold">Register</h2>
                        <div class="mt-12">
                            <form>
                                <div>
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                                    <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" 
                                    id="email"
                                    type="email" 
                                    placeholder="JaneDoe@gmail.com"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                                    <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" 
                                    id="username"
                                    type="username" 
                                    placeholder="Jane Doe"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div class="mt-2">
                                    <div class="flex justify-between items-center">
                                        <div class="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                    </div>
                                    <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500" 
                                    id="password"
                                    type="password" 
                                    placeholder="*************"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div class="mt-10">
                                    <button class="bg-purple-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-600
                                    shadow-lg"
                                    type="button"
                                    onClick={this.onSubmit}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Have an account ? <a class="cursor-pointer text-purple-600 hover:text-purple-800" href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex items-center justify-center bg-purple-100 flex-1 h-screen">
                    <div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {register})(Register)
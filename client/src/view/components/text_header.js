/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class TextHeader extends Component {
    render() {
        return (
            <header class="w-full container mx-auto">
                <div class="flex flex-col items-center py-12">
                    <a class="font-bold text-purple-800 uppercase hover:text-purple-700 text-5xl" href="#">
                        Boltz Blog
                    </a>
                    <p class="text-lg text-gray-600">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </header>
        )
    }
}

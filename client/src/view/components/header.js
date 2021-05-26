/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav class="w-full py-4 bg-purple-400 shadow">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

                    <nav>
                        <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                            <li><a class="hover:text-gray-200 hover:underline px-4" href="/blog">Blog</a></li>
                        </ul>
                    </nav>

                    <div class="flex items-center text-lg no-underline text-white pr-6">
                        <a class="pl-6" href="https://www.instagram.com/arielbolton_/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="pl-6" href="https://www.linkedin.com/in/ariel-bolton-2bb5211ba/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

            </nav>
        )
    }
}

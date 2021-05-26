/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">About Me</p>
                    <p class="pb-2">Im a 17 year old who loves to write some short stories! You'll learn a lot more about me in my writings. Hope you enjoy!</p>
                    <a href="#" class="w-full bg-purple-500 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Ariel Bolton
                    </a>
                </div>

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">Instagram</p>
                    <div class="grid grid-cols-3 gap-3">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
                    </div>
                    <a href="https://www.instagram.com/arielbolton_/" class="w-full bg-purple-500 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <i class="fab fa-instagram mr-2"></i> Follow @aboltz
                    </a>
                </div>

            </aside>
        )
    }
}

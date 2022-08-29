import React from 'react'
import Logo from '../img/logo.png'

function Footer() {
  return (
   
<footer className="p-4 bg-lack rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
<div className="sm:flex sm:items-center sm:justify-between">
    <a href="https://codezola.com/" className="flex items-center mb-4 sm:mb-0">
        <img src={Logo} className="mr-3 h-8" alt="CodeZola Logo"/>
        <span className="block text-sm text-orange-500 sm:text-center dark:text-orange-400">CodeZola</span>
    </a>
    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Media Center</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</div>
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://codezola.com/" className="hover:underline">CodeZola™</a>. Netflix clone created by Zola.
</span>
</footer>

  )
}

export default Footer
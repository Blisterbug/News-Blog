import React from 'react'

const Icons = () => {
  return (
    <div>
        <div className="flex space-x-4 ">
          <a href="https://www.instagram.com/blisterbug1/" className=" text-gray-600 hover:text-pink-500 transition-all duration-200 hover:scale-150" target='_blank'>
            <i className="fab fa-instagram "></i>
          </a>
          <a href="https://x.com/ruban_devil" className=" text-gray-600 hover:text-blue-500 transition-all duration-200 hover:scale-150 " target='_blank'>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/rubanraj02/" className=" text-gray-600 hover:text-blue-500 transition-all duration-200 hover:scale-150" target='_blank'>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Rubanraj02" className="text-gray-600 hover:text-black transition-all duration-200 hover:scale-150" target='_blank'>
            <i className="fab fa-github"></i>
          </a>
        </div>
    </div>
  )
}

export default Icons
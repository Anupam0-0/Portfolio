import { Link } from 'lucide-react'
import React from 'react'


const Title = ({text, className} : {text:string, className?:string}) => {

  return (
    <div>

        <div className={className}>
          <h1 className="text-3xl font-bold group-hover:text-green-300 transition-all">
            {text}
          </h1>
          <div className="w-48 h-2 bg-green-500 rounded-full "></div>
          <div className="w-48 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </div>

    </div>
  )
}

export default Title

import React from 'react'

function LoadingSpi() {
  return (
 

      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

          <p className="text-gray-600 font-medium">
            Searching GitHub users...
          </p>
        </div>
      </div>
   
  )
}

export default LoadingSpi
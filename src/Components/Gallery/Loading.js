import React from "react";

const Loading = () => {
  return (
    <div className="absolute h-96 w-full">
      <div className="flex items-center justify-center h-full">
        <div
          className="spinner-border animate-spin inline-block w-20 h-20 border-t-gray-400 border-8 rounded-full"/>
      </div>
    </div>
  )
}
export default Loading;
import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses}:{title: string; icon: React.ReactNode, position: string, handleClick?:() => void; otherClasses?:string;}) => {
  return (
    
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-4xl border border-emerald-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:text-emerald-300 dark:border-emerald-600 dark:bg-[linear-gradient(110deg,#03120c,45%,#1a2a23,55%,#03120c)] dark:focus:ring-emerald-300 dark:hover:bg-[linear-gradient(110deg,#03120c,45%,#1a2a23,55%,#03120c)] dark:hover:text-emerald-200 ${otherClasses ? otherClasses : '' }" onClick={handleClick}>
          {title}
        </button>    
  )
}

export default MagicButton
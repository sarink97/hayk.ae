import React from 'react'

const CustomSeparator = () => {
  return (
    <div className='relative flex items-center h-full'>
      <div className='relative h-[200px] w-[2px] 
                      rounded-[10px] bg-cerise mx-auto
                      bottom-[-30%] translate-y-[15%]'></div>
      <div className='absolute bottom-[30%] left-1/2 transform -translate-x-1/2 h-[30px] w-[30px] rounded-full bg-cerise'></div>
    </div>
  )
}

export default CustomSeparator
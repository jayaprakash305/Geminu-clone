import React, { useContext } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Context } from '@/Context/ContextProvider'

const ThemeToggle = () => {
    const {theme , toggle} = useContext(Context);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className=' text-softTextColor' variant="outline">
        Settings
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-gray-700 border-none rounded-full flex items-center justify-between">
        <div className='flex items-center'>
            <div><p>Mode</p></div>
      <div className='gird gap-4'>
      
      { theme == "dark" ?(
        
        <label
        className='relative inline-flex items-center cursor-pointer'
        onClick={()=> toggle("light")}>
            <input type="checkbox" className=' sr-only peer' disabled  />
            <div className={` ml-2 w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-slate-500 transition-colors`}>
          <div
            className={`ml-2 absolute top-0.5 left-0.5 bg-white border-gray-300 border rounded-full h-6 w-6 transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
          ></div>
        </div>
        </label>
      ):<label
      className='relative inline-flex items-center cursor-pointer'
      onClick={()=> toggle("dark")}>
          <input type="checkbox" className=' sr-only peer' disabled checked />
          <div className={` ml-2 w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-slate-500 transition-colors`}>
          <div
            className={`ml-2 absolute top-0.5 left-0.5 bg-white border-gray-300 border rounded-full h-6 w-6 transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
          ></div>
        </div></label>
      
      }
    </div>
    </div>
      </PopoverContent>
    </Popover>
  )
}

export default ThemeToggle

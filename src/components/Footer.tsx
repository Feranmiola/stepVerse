import LinkedInIconSOlid from '@/Icons/LinkedInIconSOlid'
import TelegramIconSolid from '@/Icons/TelegramIconSolid'
import TwitterIcon from '@/Icons/TwitterIcon'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col space-y-5'>
        <div className='w-[1333px] h-[403px] rounded-[24px] flex flex-row justify-between items-center bg-[#E2F2DF]'>
            

        </div>


        <div className='w-[1202.29px] flex flex-row justify-between items-center'>

            <div className='flex flex-row space-x-3'>
                <p className='text-black text-[13px]'>(c) StepVerse 2024. All rights reserved.</p>
                <p className='text-black text-[13px]'>Privacy Policy</p>
            </div>

            <div className='flex flex-row space-x-7 items-center'>
                <TwitterIcon/>
                <TelegramIconSolid/>
                <LinkedInIconSOlid/>
            </div>

        </div>
        
    </div>
  )
}

export default Footer
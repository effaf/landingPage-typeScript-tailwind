import React from 'react'
import Logo from '@/assets/Logo.png'

type Props = {}

function FooterInfo(props: Props) {
  return (
    <div>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={Logo} alt="logo" />
        </div>
        <p className='my-5'>Placeholder text</p>
        <p className='my-5'>&#169; Evogym All Rights Reserved</p>
    </div>
  )
}

export default FooterInfo
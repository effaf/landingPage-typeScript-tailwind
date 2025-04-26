import React from 'react'
import ContactUs from './ContactUs'
import Links from './Links'
import FooterInfo from './FooterInfo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'> 
      <div className='justify-between mx-auto w-5/6 gap-16 md:flex'>
        <FooterInfo/>
        <Links/>
        <ContactUs/>
      </div>
    </footer>
  )
}

export default Footer
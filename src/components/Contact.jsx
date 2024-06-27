import React from 'react'
import { CONTACT } from '../constants'

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='text-center text-4xl'>Get in Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
             <a className='border-b' href="#">{CONTACT.email}</a>   
            <p></p>

        </div>
      
    </div>
  )
}

import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import {useForm} from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import React from 'react'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage : (value : SelectedPage) => void 
}

const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
px-5 py-3 placeholder-white`;

const ContactUs = ({setSelectedPage}: Props) => {
  
  const {
    register,
    trigger,
    formState : {errors}
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();

    if(!isValid){
      e.preventDefault()
    }


  }
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32 '>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            
            {/* HEADER */}
            <motion.div>
                <HText>
                   <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>

            {/* FORM BAR AND IMAGE*/}

            <div className='mt-10 justify-between gap-8 md:flex'>

              {/* FORM */}
              <motion.div
                className='mt-10 basis-3/5 md:mt-0'
              >
                <form 
                    action="https://formsubmit.co/fa66a3ea55e6461806714789f7d0fafa"
                    target='_blank'
                    onSubmit={handleSubmit}
                    method='POST'
                    
                >
                  <input
                      className={inputStyles}
                      placeholder='NAME'
                      {...register("name", {
                          required:true,
                          maxLength:100,

                      })}
                      type='text'
                  />
                  {errors.name && (
                    <p className='mt-1 text-primary-500'>
                      {errors.name.type === 'required' && "This field is required"}
                      {errors.name.type === 'maxLength' && "This exceeds max length of 100 characters"}

                    </p>
                  )}

                  <input 
                      type="text" 
                      className={inputStyles}
                      placeholder='EMAIL'
                      {...register("email", {
                          required:true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                      })}
                  />
                  {errors.email && (
                    <p className='mt-1 text-primary-500'>
                      {errors.email.type === 'required' && "This field is required"}
                      {errors.email.type === 'pattern' && "Invalid email address"}

                    </p>
                  )}

                  <textarea
                      className={inputStyles}
                      placeholder='MESSAGE'
                      {...register("message", {
                          required:true,
                          maxLength:2000,

                      })}
                      rows={4}
                      cols={50}
                  />
                  {errors.message && (
                    <p className='mt-1 text-primary-500'>
                      {errors.message.type === 'required' && "This field is required"}
                      {errors.message.type === 'maxLength' && "This exceeds max length of 100 characters"}

                    </p>
                  )}
                
                <button 
                  type='submit'
                  className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                >
                  SUBMIT
                </button>

                </form>

              </motion.div>

              {/* IMAGE */}
              <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
              >
                <div className='md:before:content-[url("@/assets/EvolveText.png")] w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                  <img 
                    src={ContactUsPageGraphic} 
                    alt="contact-page-graphic"
                    className='w-full'
                    />
                </div>
              </motion.div>

            </div>

        </motion.div>

    </section>
  )
}

export default ContactUs
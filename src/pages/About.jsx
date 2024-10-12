import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
       </div>

          <div className='my-10 flex flex-col md:flex-row gap-16'>
              <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

             <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                      <p> Welcome to FOREVER, where style meets quality! We are passionate about bringing you the latest trends and timeless classics in fashion. Our carefully curated collections feature a diverse range of clothing designed to empower and inspire. </p>
                      <p> At FOREVER, we believe that shopping should be a delightful experience. That’s why we focus on exceptional customer service and high-quality products. We prioritize sustainability and ethical practices, ensuring that you feel good about your purchases. </p>
                     <b className='text-gray-800' > Our Mission </b>
                     <p> "Our mission is to provide trendy, high-quality fashion that fits every style and budget, while delivering an exceptional online shopping experience with fast, reliable service." </p>        
             </div>

          </div>
              <div className='text-xl py-4'>
                    <Title text1={'WHY'} text2={'CHOOSE US'} />                                 
              </div>

         <div className='flex flex-col md:flex-row text-sm mb-20'>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b> Quality Assurance: </b>
                      <p className=' text-gray-600'> "Our commitment to quality assurance ensures that every item is carefully inspected for craftsmanship and durability before it reaches our customers" </p>
                    </div>

                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b> Convenience: </b>
                      <p className=' text-gray-600'> "Shopping with us is all about convenience—browse our wide selection of styles anytime, anywhere, from the comfort of your home. </p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b> Exceptional Customer Service: </b>
                      <p className=' text-gray-600'> "Our exceptional customer service is here to make your shopping experience smooth and enjoyable" </p>
                    </div>
         </div>
                <NewsletterBox />
    </div>
  )
}

export default About

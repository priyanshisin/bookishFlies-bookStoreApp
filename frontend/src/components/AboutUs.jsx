import React from 'react'

function AboutUs() {
  return (<>
    {/* <div className="max-w-screen-2xl h-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-pink-50"> */}
    <div className='flex h-screen px-20 py-10 bg-pink-50'>
{/*Left part of flexbox */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 px-7 pt-32 rounded-2xl border ">
          <h3 className='text-yellow-500 text-xl'>How it started?</h3>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold">
                Our goal is to transform {" "}
                <span className="text-pink-500">GLOBAL LEARNING!!!</span>
              </h1>
              <p className="font-xl">
                This "bookishFlies" was founded by Ms.Priyanshi, a passionate lifelong learner. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aperiam alias distinctio neque quod voluptatibus rerum enim veniam, nemo amet rem dignissimos. Ipsum.  <br />A Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, delectus. Voluptatibus recusandae similique, nobis molestias ipsa sint reiciendis rerum necessitatibus nihil ipsum. Doloribus  sapiente nulla voluptatibus quaerat nemo, expedita amet ab! Provident.
              </p>
              
            </div>
          
        </div>

{/*Right part of flexbox */}
        <div className="order-1 w-full md:w-1/2 mt-10 rounded-2xl mx-5 ">
            <div className='py-1 px-12 rounded-2xl'>
                <img src="../../public/about-us-img.jpg" className="rounded-xl w-62 h-62" alt="img not found"/>
            </div>
            <div className='grid grid-cols-2 py-5 px-12 rounded-2xl '>
                <div className='bg-[#e6e6e6] rounded-xl mr-2 mb-2' ><h1 className='p-3 text-xl font-semibold'>3.5</h1><p className='text-sm px-3 pb-1'>Years Experience</p></div>
                <div className='bg-[#e6e6e6] rounded-xl mr-2 mb-2' ><h1 className='p-3 text-xl font-semibold'>23</h1><p className='text-sm px-3 pb-1'>Project Challenge</p></div>
                <div className='bg-[#e6e6e6] rounded-xl mr-2 mb-2' ><h1 className='p-3 text-xl font-semibold'>830+</h1><p className='text-sm px-3 pb-1'>Positive Reviews</p></div>
                <div className='bg-[#e6e6e6] rounded-xl mr-2 mb-2' ><h1 className='p-3 text-xl font-semibold'>100K</h1><p className='text-sm px-3 pb-1'>Trusted Students</p></div>
                
            </div>
        </div>

      </div>
  </>)
}

export default AboutUs
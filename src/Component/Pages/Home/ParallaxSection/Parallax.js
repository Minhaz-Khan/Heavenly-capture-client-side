import React from 'react';
import './Parallax.css'
import image1 from '../../../../asset/pexels-chloe-1043474.jpg'

const Parallax = () => {
    return (
        <div className='parallax'>
            <div className='parallax-inner py-32 container mx-auto text-themePrimary '>
                <h3 className='text-xl text-center font-medium'>Why Choose Us</h3>
                <h2 className='text-4xl text-center font-semibold'>Adding the memories of every moment</h2>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                    <div className=' p-4'>
                        <h4 className='text-xl font-medium'>Professional</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium'>Experienced Photographer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium'>Professional</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Parallax;
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import apple from '../../Assets/apple.png'
import adobe from '../../Assets/adobe.png'
import amazon from '../../Assets/amazon.png'
import bmw from '../../Assets/bmw.png'
import flipkart from '../../Assets/flipkart.png'
import mercedes from '../../Assets/mercedes.png'
import myntra from '../../Assets/myntra.webp'
import walmart from '../../Assets/walmart.webp'

const Data = [
    {
        id: 1,
        image: apple,
        title: 'System Engineer',
        time: 'Now',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
    {
        id: 2,
        image: adobe,
        title: 'Senior Software Engineer',
        time: '2days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Adobe Inc.'
    },
    {
        id: 3,
        image: amazon,
        title: 'Software Developer II',
        time: '2months',
        location: 'Pune',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Amazon Inc.'
    },
    {
        id: 4,
        image: bmw,
        title: 'RADAR Engineer',
        time: '23days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'BMW Motors'
    },
    {
        id: 5,
        image: flipkart,
        title: 'Web Developer',
        time: '14days',
        location: 'Mumbai',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Flipkart Inc.'
    },
    {
        id: 6,
        image: mercedes,
        title: 'Automation Engineer',
        time: '8hours',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Mercedes Benz.'
    },
    {
        id: 7,
        image: myntra,
        title: 'Lead Software Engineer',
        time: '12days',
        location: 'Greater Noida',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Myntra Inc.'
    },
    {
        id: 8,
        image: walmart,
        title: 'Full Stack Developer',
        time: '32mins',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
    {
        id: 9,
        image: apple,
        title: 'System Engineer',
        time: 'Now',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
    {
        id: 10,
        image: adobe,
        title: 'Senior Software Engineer',
        time: '2days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Adobe Inc.'
    },
    {
        id: 11,
        image: amazon,
        title: 'Software Developer II',
        time: '2months',
        location: 'Pune',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Amazon Inc.'
    },
    {
        id: 12,
        image: bmw,
        title: 'RADAR Engineer',
        time: '23days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'BMW Motors'
    },
    {
        id: 13,
        image: flipkart,
        title: 'Web Developer',
        time: '14days',
        location: 'Mumbai',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Flipkart Inc.'
    },
    {
        id: 14,
        image: mercedes,
        title: 'Automation Engineer',
        time: '8hours',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Mercedes Benz.'
    },
    {
        id: 15,
        image: myntra,
        title: 'Lead Software Engineer',
        time: '12days',
        location: 'Greater Noida',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Myntra Inc.'
    },
    {
        id: 16,
        image: walmart,
        title: 'Full Stack Developer',
        time: '32mins',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
    {
        id: 17,
        image: apple,
        title: 'System Engineer',
        time: 'Now',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
    {
        id: 18,
        image: adobe,
        title: 'Senior Software Engineer',
        time: '2days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Adobe Inc.'
    },
    {
        id: 19,
        image: amazon,
        title: 'Software Developer II',
        time: '2months',
        location: 'Pune',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Amazon Inc.'
    },
    {
        id: 20,
        image: bmw,
        title: 'RADAR Engineer',
        time: '23days',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'BMW Motors'
    },
    {
        id: 21,
        image: flipkart,
        title: 'Web Developer',
        time: '14days',
        location: 'Mumbai',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Flipkart Inc.'
    },
    {
        id: 22,
        image: mercedes,
        title: 'Automation Engineer',
        time: '8hours',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Mercedes Benz.'
    },
    {
        id: 23,
        image: myntra,
        title: 'Lead Software Engineer',
        time: '12days',
        location: 'Greater Noida',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Myntra Inc.'
    },
    {
        id: 24,
        image: walmart,
        title: 'Full Stack Developer',
        time: '32mins',
        location: 'Bengaluru',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore enim recusandae, ipsa ex quae sed suscipit voluptas in placeat amet, quaerat, eos consectetur deleniti. Nisi facere inventore ducimus sint recusandae?',
        company: 'Apple Inc.'
    },
]

const Job = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({ id, image, title, time, location, desc, company }) => {
                        return (
                            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyColor-400/700 hover:shadow-lg">
                                <span className='flex justify-between items-center gap-4'>
                                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        <BiTimeFive />{time}
                                    </span>
                                </span>
                                <h6 className='text-[#ccc]'>{location}</h6>
                                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                    {desc}
                                </p>
                                <div className='company flex items-center gap-2'>
                                    <img src={image} alt="CompanyLogo" className='w-[10%]' />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                                </div>
                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>Apply Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Job
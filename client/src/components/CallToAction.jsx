import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more Project and Programming?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className=' bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/gyanendra54" target='_blank' rel='noopener noreferrer'>
                Top 100 Coding Projects For Beginners
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://contentstatic.techgig.com/photo/76118246/5-personal-characteristics-of-successful-programmers.jpg?119058" />
        </div>
    </div>
  )
}
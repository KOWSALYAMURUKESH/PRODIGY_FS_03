import { useState } from 'react';
import homeimage1 from '../../assets/image1.png';
import homeimage2 from '../../assets/image2.png'
import homeimage3 from '../../assets/image3.png'
import homeimage4 from '../../assets/image4.png'
import Baby from './baby\'s collections';
import Mom from './mom\'s collections';
import Maternity from './maternity collections';



function Home() {
    

const images = [
    {
        image : homeimage1,
        title : "MD's Mom and Baby Wellness",
        description : "Healthy Beginnings for Mom and Baby",
    },
    {
        image : homeimage2,
        title : "MD's Baby Collections",
        description : "Ready to enjoy the journey with your Kids",
    },
    {
        image : homeimage3,
        title : "MD's Maternity Collections",
        description : "To explore unbelievable maternity experience",
    },
     {
        image : homeimage4,
        title : "MD's Mom Collections",
        description : "Enjoy the journey of Motherhood with Us",
    },
    
];

      
    const [currentIndex, setCurrentIndex] = useState(0)


    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length-1 : prev -1));
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length-1 ? 0 : prev +1)); 
    }

    const image = images[currentIndex];


    return (

        <div>

        <div className='h-[400px] top-0 relative w-full flex overflow-hidden mt-16'>

    
            
            <div
            
                className="w-1/2  bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.image})` }}>
            </div>

            <div
            
                className="w-1/2  bg-cover bg-center bg-no-repeat scale-x-[-1]"
                style={{ backgroundImage: `url(${image.image})` }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                
                <h1 className="text-white lg:text-4xl md:text-3xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-xl   whitespace-nowrap">
                    {image.title}
                </h1>
                <h1 className='text-white lg:text-3xl md:text-xl m-8 text-center  font-semibold '>{image.description}</h1>
                <button className='p-3 bg-pink-200 rounded-xl lg:text-xl md:text-sm '
                >Shop Now</button>


            </div>
            
    
        
      <button
      onClick={prevSlide}
  
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white  text-green-900 text-5xl font-extrabold rounded-full w-16 h-16 shadow-lg hover:bg-green-100 ring-2 ring-green-600 z-10 flex items-center justify-center"
>
  &#8592;
</button>

      <button
   
   onClick={nextSlide}
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-900 text-5xl font-extrabold rounded-full w-16 h-16 shadow-lg hover:bg-green-100 ring-2 ring-green-600 z-10 flex items-center justify-center"
>   &#8594; </button>

 </div>

<Baby></Baby>

<Mom></Mom>
<Maternity></Maternity>



       
</div>
    )
}
export default Home;

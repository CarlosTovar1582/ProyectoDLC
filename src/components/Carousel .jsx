import react from "react";
import CarrouselCard from "./CarrouselCard";

const Carousel = () =>{
    const images =[
        {
            
            title :"Producto 1",
            price: 12000,
            url:"https://i.postimg.cc/9fj85ZH1/LogoDLC3.png",
            

        },
        {
            title :"Producto 2",
            price: 50000,
            url:"https://i.postimg.cc/C1y5s6x0/SCHNEIDER-ELECTRIC.jpg",

        },
        {
            title :"Producto 3",
            price: 20000,
            url:"https://i.postimg.cc/gk9TskXC/sinovo-1.jpg",

        },
        {
            title :"Producto 4",
            price: 20000,
            url:"https://i.postimg.cc/ncGC4t5G/steck1.png",

        },
        {
            title :"Producto 5",
            price: 20000,
            url:"https://i.postimg.cc/BnkgqSfq/Logo-sinovo.png",

        },
        {
            title :"Producto 6",
            price: 20000,
            url:"https://i.postimg.cc/mDn6pq5d/CHINT.jpg",

        },
        {
            title :"Producto 7",
            price: 20000,
            url:"https://i.postimg.cc/Zn1tF8k2/sinovo-2.jpg",

        },
        {
            title :"Producto 8",
            price: 20000,
            url:"https://i.postimg.cc/G2MCQdY6/thiet-bi-dong-cat-schneider-3.jpg",

        },

        
   
        
        

    ];


    

    return(
        <div className="bg-slate-200  flex items-cente justify-center">        
            <CarrouselCard images={images}/>           
        </div>
        
    )
}
export default Carousel
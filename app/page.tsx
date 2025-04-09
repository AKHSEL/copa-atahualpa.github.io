//renderizar como contenido

import React from "react";

import Header from "./components/Header";
import { bebas } from "./UI/fonts";
import { GiSoccerBall } from "react-icons/gi";


const Home=()=>{
    return(
        <main className="flex min-h-screen flex-col">
            <Header />
            <div className="mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5"> 
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"> {/*columna izq*/}
                    <p className={`${bebas.className} text-xl text-[#333333] md:text-3xl md:leading-normal`}>
                        <strong>Bienvenidos a la Copa Atahualpa 2025 !</strong>
                    </p>
                    <p className="mt-4 text-lg md:text-xl text-justify text-[#333333] max-w-2xl mx-auto">
                      Vive la emoción del fútbol distrital. Sigue los partidos, conoce a los equipos y no te pierdas ningún detalle de esta gran competencia en la Losa Deportiva Atahualpa.
                    </p>

                    <a href="/dashboard/tablaPosiciones" className="flex items-center gap-5 self-start rounded-lg bg-[#1F2BAF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800 md:text-base">
                        <span>Ir al Sitio Principal</span><GiSoccerBall />
                    </a>
            </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">{/*columna derecha*/}
                    <img src="COPA.jpg" alt="Copita"  width={1000} height={700} className="hidden md:block"/>
                </div>
            </div>
        </main>
        
    );
};
export default Home;
 //configuraciones, contiene etiquetas HTML

 import React, { FC, PropsWithChildren } from "react";
 import "@/app/UI/globals.css";
 import {roboto} from "./UI/fonts"

 const RootLayout: FC<PropsWithChildren> =({children}) =>{
    return(
        <html>
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );

 }
 export default RootLayout;
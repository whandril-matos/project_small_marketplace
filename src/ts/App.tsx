import { createRoot } from 'react-dom/client';
import React from "react";

export function cardProduct(price:string, brand:string, productName: string, dProduct: string, srcImage: string ){
    let space:string = " "
    let etc:string = "..."
    return(
        
            <div className='shape'> 
                <p className='MetaData'> </p>
                <div className='imgDiv' >
                    <img className="img" src={srcImage} alt="" />
                </div>

                

                <div className='nameT'>
                    
                    {brand}{space}{productName}
                </div>
                <div className='price'>
                    
                    {price}
                </div>
                <div className='aboutProduct'>
                <p className='text'>{dProduct.slice(0, 43)+etc}</p>

                </div>
                <button className='buttomCard'>botão de compra</button>
            </div>
        
    )
}

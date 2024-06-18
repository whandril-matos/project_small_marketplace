import React from "react";
import { createRoot } from 'react-dom/client';
import {getAnObjetc} from './getAnObjetc'
import { offOnIntens } from './offLoading';

export async function insert(igo: any) {
    let long = await igo;

    const searchProductId = long.products;
    const pages = Object.keys(searchProductId).length;
    
    const pix: any = [];
    for (let i: number = 1; i <= pages; i++) {
        console.log(i);
        pix.push(getAnObjetc(i, "n", long));
    } 

    // Aguardar todas as Promises serem resolvidas
    const resolvedPix = await Promise.all(pix) ;
    
    const domNode = document.getElementById('root')!;
    const root = createRoot(domNode);  
    root.render(<>{resolvedPix}</>);
    offOnIntens('loadeTable', 'none',resolvedPix)
    offOnIntens('takeProductId', 'flex',resolvedPix)
    
}
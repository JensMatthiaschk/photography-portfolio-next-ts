import lqip from "lqip-modern";
import fetch from "node-fetch";

const imgUrl = 'https://images.unsplash.com/photo-1677741447050-e166cf1a1f14?ixid=Mnw0MjA0MDB8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3ODM5NTIzMg\u0026ixlib=rb-4.0.3'

async function getDataUrl(url:string){

    const imgData = await fetch(url)
    const arrayBufferData = await imgData.arrayBuffer()
    const lqipData = await lqip(Buffer.from(arrayBufferData))
    return lqipData.metadata.dataURIBase64
}

getDataUrl(imgUrl).then(console.log)

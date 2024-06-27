import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { resolve } from "styled-jsx/css";

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dwpi4aubh', 
        api_key: '511943635981393', 
        api_secret: 'YruyI5Vve2kpNP7t2TMcyrvSVaw' 
    });

export async function POST(request){
    const data = await request.formData();
    const image = data.get("image")

    if(!image){
        return NextResponse.json("Hubo hun error no se pudo subir la imagen", {status:400})
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const response = await new Promise((resolve, reject) =>{
        cloudinary.uploader.upload_stream({}, (err, result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
        .end(buffer)
    })

    return NextResponse.json({
        message: "logo de equipo subido correctamente",
        url: response.secure_url,
    })
} 
    
    
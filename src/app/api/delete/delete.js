import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { resolve } from "styled-jsx/css";


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dwpi4aubh', 
        api_key: '511943635981393', 
        api_secret: 'YruyI5Vve2kpNP7t2TMcyrvSVaw' 
    });
 
 //ELIMINAR
 export  async function DELETE (request) {
    try {
        const data = await request.formData();
        const image = data.get('imagenDelete');
        const publicId = data.get('public_id');

        if (!image || !publicId) {
            return NextResponse.json('No se pudo eliminar la imagen', { status: 400 });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await cloudinary.uploader.destroy(publicId);

        return NextResponse.json({ message: 'Imagen eliminada correctamente' });
    } catch (error) {
        console.error('Error eliminando la imagen:', error);
        return NextResponse.json('Error eliminando la imagen', { status: 500 });
    }
}

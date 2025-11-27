const IMGBB_API_KEY = "7b72fcbfb8a7d0bef4d094f9dbf2c1c7";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) =>{
        const reader = new FileReader();

        reader.onload = () => {
            const result = String(reader.result);
            const parts = result.split(",");

            if(parts.length < 2 ) {
                reject (new Error("Formato de Data URL invalido"));
                return;
            }
            const base64 = parts[1];
            resolve(base64);
        };
        reader.onerror = () => {
            reject(new Error("No se pudo leer el archivo"));
        };
        reader.readAsDataURL(file);  
    });
};
export const uploadToImgbb = async(file) => {
    if(!file) {
        throw new Error("No se recibio ningun archivo de imagen");

    }
    const form = new FormData();
    form.append("key", IMGBB_API_KEY);

    const base64 = await fileToBase64(file);
    form.append("image", base64);

    const response = await fetch(ENDPOINT, {
        method: "POST",
        body: form,
    });
    let json;
    try {
        json = await response.json();
    }catch{
        throw new Error("La respuesta del servidor no es JSON valido");

    }
    if(!response.ok || (json && json.success === false)) {
        const message = 
        (json && json.error && json.error.message) || "Error al subir la imagen";
        throw new Error(message);
    }
    if (json && json.data) {
        if (json.data.display_url) {
            return json.data.display_url;
        }
        if (json.data.url) {
            return json.data.url;
        }
    }
    throw new Error("No se recibio una URL valida desde imgbb");

}; 
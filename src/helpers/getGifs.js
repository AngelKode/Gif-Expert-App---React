
export const getGifs = async(category) => {

    const apiKey = 'JPW0tI3z43MgYJrGItISaoLhQqWCRbv0';
    const numberOfGifs = 10;
    const httpRequest = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${numberOfGifs}&api_key=${apiKey}`);
    let gifs = [];

    if(httpRequest.ok){
        const {data} = await httpRequest.json();
        gifs = data.map((img) =>{
            return{
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
            }
        });
    }

    return gifs;
}

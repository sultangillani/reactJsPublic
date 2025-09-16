//https://api.imgflip.com/get_memes
export async function getAllMemes(){
    const url = 'https://api.imgflip.com/get_memes';
    const response = await fetch(url);
    return await response.json();
} 
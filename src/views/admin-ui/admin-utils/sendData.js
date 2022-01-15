export default async function sendData(url, method="POST", data){
    const response = await fetch(url, {
        method: method,
        body: data
    })
    return response;
}
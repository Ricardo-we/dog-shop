export default function getBase64(file, callback){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        callback(reader.result);
    };
    reader.onerror = function (error) {
        return error;
    };
}
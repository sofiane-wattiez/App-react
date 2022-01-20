import { AsyncStorageStatic } from "react-native";

const ApiPost = async (request ,body) => {
    var result = await fetch(request,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorisation: 'bearer '+await AsyncStorageStatic.getItem('token')
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch((error) => {
            console.log("ERROR :" + error)
        });

        return result ;
}
export default ApiPost;
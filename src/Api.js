const responseHandler = res => {
    //console.log(res);
    return res.ok ? res.json() : res.statusText;
}



class Api {
    constructor({path}) {
        this.path=path;
        //this.token=token;
    }

    getPostList() {
        //return "all ok";
        return fetch(`${this.path}/post`, {
            /*headers: {
                "Access-Control-Allow-Origin": "http://localhost:8080",
                'Access-Control-Allow-Credentials' : 'true'
            }*/
        }).then(responseHandler);  //путь и набор параметров*/
    }

    getPostProduct(id) {
        //console.log(`${this.path}/data/${id}.json`);
        return fetch(`${this.path}/post/${id}`, {
            
        }).then(responseHandler);  //путь и набор параметров
    }

    getAuthorById(id) {
        return fetch(`${this.path}/author/${id}`, {
            
        }).then(responseHandler);  //путь и набор параметров
    }

    postAuthor(author) {

    
        console.log("author : " + JSON.stringify(author));


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(author)
        };
        fetch(`${this.path}/author`, requestOptions)
            .then(responseHandler);



        // Simple POST request with a JSON body using fetch
        /*const requestOptions = {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: {"x": 4}
        };
        fetch(`${this.path}/author`, requestOptions)
        .then(responseHandler);*/
    }

}
//https://raw.githubusercontent.com/Jane-art/myProgect-2022-/master/src/data/1.json

const config = {
    path: "http://192.168.31.167:3000",

} // файл для конфигурации с сервером, можно поменять запросы и токен для своего проекта
const api = new Api(config);

export default api;
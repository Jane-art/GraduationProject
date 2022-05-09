const responseHandler = res => {
    // console.log(res);
    return res.ok ? res.json() : res.statusText;
}

const responseHandlerById = res => {
    //console.log(res);
    if (res.ok){
        let array = [];
        array = res.json().then(x => { return x});
        console.log(array);
        return array;

    } else {
        return res.statusText;
    }

}


class Api {
    constructor({path}) {
        this.path=path;
        //this.token=token;
    }

    getPostList() {
        //return "all ok";
        return fetch(`${this.path}`, {
            /*headers: {
                "authorization": `Bearer ${this.token}`
            }*/
        }).then(responseHandler);  //путь и набор параметров*/
    }

    getPostProduct(id) {
        return fetch(`${this.path}`, {}).then(responseHandlerById);  //путь и набор параметров
    }
}

const config = {
    path: "http://raw.githubusercontent.com/Jane-art/myProgect-2022-/master/src/data.json",

} // файл для конфигурации с сервером, можно поменять запросы и токен для своего проекта
const api = new Api(config);

export default api;
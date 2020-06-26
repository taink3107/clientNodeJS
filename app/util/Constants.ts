const BASE_URL = "http://localhost:8688/api_v1";

export var ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        personID: `${BASE_URL}/person/{id}`,
        save: `${BASE_URL}/person/save`,
        update: `${BASE_URL}/person/update`,
    },
    account: `${BASE_URL}/account`,
    task: {
        getById: `${BASE_URL}/cate/{id}`,
        save: `${BASE_URL}/cate/save`,
        isExist: `${BASE_URL}/cate/exist/{id}`,
    }
}
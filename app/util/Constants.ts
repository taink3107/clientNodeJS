const BASE_URL = "http://localhost:8888/api_v1";

export var ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        personID: `${BASE_URL}/person/{id}`
    },
    account: `${BASE_URL}/account`
}
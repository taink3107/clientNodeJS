const BASE_URL = "http://localhost:8688/api_v1";

export var ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        personID: `${BASE_URL}/person`,
        save: `${BASE_URL}/person/save`
    },
    account: `${BASE_URL}/account`
}
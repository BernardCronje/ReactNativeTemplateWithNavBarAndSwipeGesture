import common from './common';

class accountService {
    constructor(props) {
    }

    signin(username, password) {

        common.authorizationToken = '';
        var object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 10000,
            body: JSON.stringify({
                'Username': username,
                'Password': password,
            })
        };

        return fetch(common.urlAuthenticate, object);
    }


    getUserProfile() {
        var object = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + common.authorizationToken,
            },
            timeout: 5000,
        };
        return fetch(common.urlGetUserProfile, object);
    }
}

export default new accountService();


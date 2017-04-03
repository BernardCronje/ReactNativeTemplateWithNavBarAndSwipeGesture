

export default class Common {

    static serverIpAddress = '10.0.0.101';
    static url = 'http://' + Common.serverIpAddress + '/LoyaltySystem.Web';

    static urlAuthenticate = Common.url + '/api/Account/Authenticate';
    static urlGetUserProfile = Common.url + '/api/services/app/profile/GetUserProfile';
    static authorizationToken = '';
    static loggedInUser = {};

}
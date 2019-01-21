/*
Document : https://docs.chatfuel.com/api/broadcasting-api/broadcasting-api 
 */
const CHATFUEL_BASE_URL = 'https://api.chatfuel.com';
const makeChatfuelBroadcastApi = (botId, userId) => `${CHATFUEL_BASE_URL}/bots/${botId}/users/${userId}/send`;
const request = require('request-promise');
module.exports = (config) => {
    const expectedParameters = [
        'botID', 'token',
    ];
    if (!config) throw new Error('No config required!')
    if (typeof config != "object") throw new Error('Config must be an object')
    expectedParameters.forEach(e => {
        if (!config[e]) throw new Error(`Config object must be require ${e}`)
    })
    const sendBroadcast = (option) => request.post({
            url: makeChatfuelBroadcastApi(config.botID, option.userID),
            qs: { ...option.attributes, chatfuel_token: config.token, chatfuel_block_name: option.blockName },
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        })
        .then(e => true)
        .catch(e => Promise.resolve(false));
    const waitSync = (ms) =>{
        let date = (new Date()).getTime();
        while((new Date()).getTime() - date < ms);
    }
    return async function(options, callback) {
        let result = new Object();
        if (options.userID) options = new Array(options);
        if (typeof option == 'object') return false;
        for (let i = 0; i < options.length; i++) {
            result[options[i].userID] = await sendBroadcast(options[i]);
            waitSync(1000);
        }
        return result;
    }
}

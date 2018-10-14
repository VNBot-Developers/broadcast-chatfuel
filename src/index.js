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

    return function (options, callback) {      
        if (options.userID) options = new Array(options);
        allPromise = options.map(option => request.post({
            url: makeChatfuelBroadcastApi(config.botID, option.userID),
            qs: { ...option.attributes, chatfuel_token: config.token, chatfuel_block_name: option.blockName },
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        }))
        return Promise.all(allPromise).then(results=> Promise.resolve(results.map(result => result.success))).catch(e => Promise.resolve(e.error.success))
    }
}


const broadcast = require('../index')({ botID: '5c2790970ecd9f2f914b1a37', token: 'mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD' })


broadcast([{
        userID: 2796514870421406,
        blockName: 'test_broadcast',
        attributes: {
            noidung: 'Hello it\'s test message number ' + (new Date()).getTime()
        }
    }, {
        userID: 1980271265394059,
        blockName: 'test_broadcast',
        attributes: {
            noidung: 'Hello it\'s test message number '+ (new Date()).getTime()
        }
    },
    {
        userID: 2796514870421406,
        blockName: 'test_broadcast',
        attributes: {
            noidung: 'Hello it\'s test message number '+ (new Date()).getTime()
        }
    }
]).then(console.log)

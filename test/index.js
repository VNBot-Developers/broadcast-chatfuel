const broadcast = require('../index')({ botID: '5bb03c4a76ccbc32a2b86c46' , token:'mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD'})


broadcast({
    userID: 2220495564688394,
    blockName: 'test_broadcast',
    attributes:{
        noidung: 'Hello it\'s test message number 0'
    }
}).then(console.log)
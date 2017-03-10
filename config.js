
exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://admin:admin@ds127300.mlab.com:27300/node-capstone-find-register-events' :
                            'mongodb://admin:admin@ds127300.mlab.com:27300/node-capstone-find-register-events');
exports.PORT = process.env.PORT || 5000;
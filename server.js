var express = require('express');
var app = express();
var _require = require('./models'),
    ShoppingList = _require.ShoppingList;




app.use(express.static('public'));
app.listen(process.env.PORT || 8080);


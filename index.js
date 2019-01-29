var app = require('./src/app');

var PORT = 3000;

app.listen(PORT, function () {
    console.log(`Server started on port` + PORT
    );
});
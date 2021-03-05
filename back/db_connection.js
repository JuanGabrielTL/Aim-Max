const mongoose = require('mongoose')

const password = '4919951888'
const uri = `mongodb+srv://oniel1721:${password}@cluster0.oxnsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("conectado a mongodb")
});
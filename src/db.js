import mongoose from 'mongoose'

const uri = 'mongodb://localhost:27017/myapp'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Conectado a DB'))
    .catch(err => console.log(err))
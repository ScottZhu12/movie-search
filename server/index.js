const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

// setup environment configuration
dotenv.config();

// setup port number
const port = process.env.PORT || 5000;

// connect to MongoDB
const run = async () => {
  const Db =
    'mongodb+srv://scott:RY38OTajthUf9kVZ@cluster0.ljxcw.mongodb.net/?retryWrites=true&w=majority';

  await mongoose.connect(Db, {
    useNewUrlParser: true,
  });

  console.log('Connected to database successfully');
};
run().catch((err) => console.log(err));

// start server
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

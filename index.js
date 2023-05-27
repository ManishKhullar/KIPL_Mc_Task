require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const data_model = require('./model/data_model.js');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.port || 3000;

var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });

let text = `<p>Here is a quote from WWF's website:<br></p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
“Experience is the name everyone gives to their mistakes.” – Oscar Wilde
<br><br>
“ In order to be irreplaceable, one must always be different” – Coco Chanel
<br><br>
“Quantum computing will change the existence of Interpreted languages” -Manish K
</blockquote>`

app.get('/', function(req, res){
  res.send(text);
})

app.get('/api/login', (req, res) => {
  try{
    var articles = data_model.find({});
    console.log(articles);
  } catch(err){
    console.error(err);
  }
});

app.get('/api/datainsert', async (req, res) => {
 try{
      var formDetails = new data_model({
        'user_id': Number,
        'password': String,
        'permission': String,
      })
      formDetails.save();
    await res.send(req.query);
    } catch(err){
    console.error(err);
  }
});

app.listen(port, (req,res)=>{
  console.log("Connected at http://127.0.0.1:"+(process.env.port || port));
});
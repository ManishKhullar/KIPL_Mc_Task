const bcrypt = require('bcryptjs');

app.listen(port, ()=>{
    console.log('Connected to port')
})

async function doCrypting(){
 const password = 'Qwert!@#4';
 const hashedPassword = await bcrypt.hash(password, 8);
 const isMatch = await bcrypt.compare('Qwert!@#4', hashedPassword);
 return console.log('password is ', password, 
        'and crypt password is ', hashedPassword,
        isMatch);
}

doCrypting();
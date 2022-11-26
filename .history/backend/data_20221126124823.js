import bcrypt from 'bcryptjs';

const data = {
    userList: [
        {
            name: 'Lola',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234567890'),
            isAdmin: true
        },
        {
            name: 'Jackson',
            email: 'jack_black23@example.com',
            password: bcrypt.hashSync('12345'),
            isAdmin: false
        },
        {
           
            name: "Jackky Boy",
            email: "qust_pistols@example.com",
           password: bcrypt.hashSync('123456'),
        isAdmin: false,
        
          }
          

    ],
   
}
export default data;
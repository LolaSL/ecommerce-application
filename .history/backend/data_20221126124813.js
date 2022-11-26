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

        },
        {
            name:"Sas Test"

email
"sas-test@example.com"
password
"$2a$10$g7Wj7zXj/Ev4e94z4N7haOMFsiC1XvBC9GnS//EaYeXYTcpjc31em"
isAdmin
false
createdAt
2022-11 - 25T17: 36: 46.381+00: 00
updatedAt
2022-11 - 25T17: 36: 46.381+00: 00
__v
0}


    ],

}
export default data;
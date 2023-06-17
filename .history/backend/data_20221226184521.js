import bcrypt from 'bcryptjs';

const data = {
    eventList: [

            {
              "id": "01",
              "title": "History and styles of floristry - Ikebana",
              "type": "Lectures ",
              "imageUrl": "https://pen-online.com/fr/wp-content/uploads/2020/04/16062528/Ikebanavice_NIIHARA04-1024x726.jpg",
              "alt": "Ikebana",
              "information": "Modernist design emerged in the early 20th century as a response to changes in technology and society. Simplified, clean lines replaced ornamentation, and new materials were embraced.From the mid-1940s designers and makers from Scandinavia and Finland led the way within the Modernist jewellery movement. Individual artists and designers pushed aside traditional ideas of production and adopted new influences - often drawing inspiration from the natural environment. They created unique beautiful works that demonstrated restraint, simplicity and functionality. In the late 1950s British artists and designers began to create similar work. British Modernist jewellery became defined by the use of textural, sculptural gold work, inspired by nature and often incorporating large gemstones",
              "informationSource": "Ikebono Senkei.",
              "reference": "'True refinement'",
              "date": "01 January 2023, Su. ",
              "time": "15.00",
              "location": "Hall 1. ",
              "language": "en"
            },
            {
              "id": "02",
              "title": "Western Europe in Renaissance",
              "type": "Lectures ",
              "imageUrl": "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1936/2017/05/31175505/google-art-project-edited.jpeg",
              "information": "Renaissance art, painting, sculpture, architecture, music, and literature produced during the 14th, 15th, and 16th centuries in Western Europe under the combined influences of an increased awareness of nature, a revival of classical learning, and a more individualistic view of man. Scholars no longer believe that the Renaissance marked an abrupt break with medieval values, as is suggested by the French word renaissance, literally “rebirth.” Rather, historical sources suggest that interest in nature, humanistic learning, and individualism were already present in the late medieval period and became dominant in 15th- and 16th-century Western Europe concurrently with social and economic changes such as the secularization of daily life, the rise of a rational money-credit economy, and greatly increased social mobility.",
              "informationSource": "Historical resource.",
              "reference": "'The concept of the painting in the culture and artistic processes in Western Europe in Renaissance.'",
              "date": "02 February 2023, Th. ",
              "time": "19.00",
              "location": "Hall 2. ",
              "language": "en"
            },
            {
              "id": "03",
              "title": "Knights of Europe",
              "type": "Exibition ",
              "imageUrl": "https://storge.pic2.me/c/1360x800/547/542443963df57.jpg",
              "information": "Initially formed to protect and offer medical care for pilgrims travelling through the Holy Land, the military orders such as the Knights Templar, Knights Hospitaller and Teutonic Knights soon established themselves as an invaluable military presence in the region. Knights of the military orders, who were recruited from across Europe and lived much like monks, were frequently given the most dangerous passes and strategically valuable castles to garrison and they provided several hundred knights for most Crusade field armies. With the best training and equipment, they were the elite force of the Crusaders and their frequent execution if ever captured is a testimony to the respect they had from their opponents – they were simply too skilled and fanatical to be allowed back onto any future battlefield. The one drawback of the orders was their total independence which sometimes resulted in arguments with rulers of the Crusadersates and leaders of Crusader armies over strategy and alliances. Knights of the military orders were sometimes a little too enthusiastic on the battlefield and could make rash, unsupported charges but their valour and worth to the crusading cause is undisputed.",
              "informationSource": "Historical resource.",
              "reference": "'Knights of Europe, philosophy, strategy and equipment used in battles.'",
              "date": "10 March 2023, Fr. ",
              "time": "10.00",
              "location": "Hall 3. ",
              "language": "en"
            },
    ],
    userList: [
        {
            name: 'Lola Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234567890'),
            isAdmin: true
        },
        {
            name: 'Jackson Teller',
            email: 'jack_black234@example.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: false
        },
        {

            name: "Jackky Boy",
            email: "quest_pistols@example.com",
            password: bcrypt.hashSync('12345625'),
            isAdmin: false,

        },
        {

            name: "Jakky Boyd",
            email: "quest_pistols_Jack123@example.com",
            password: bcrypt.hashSync('123123123'),
            isAdmin: false,

        },
        {
            name: "Sas Test",
            email: "sas-test@example.com",
            password: bcrypt.hashSync('1234567'),
            isAdmin: false
        },
        {
            name: "Jane Doe",
            email: "jane_doe@example.com",
            password: bcrypt.hashSync('12341234'),
            isAdmin: false
        }


    ],
    productList: [
        {
            // _id :'1',
            name: "Abstract cityscape",
            slug: "abstract-cityscape",
            category: "Abstract",
            image: "/images/1.jpg",
            price: 1299,
            countInStock: 2,
            brand: "Andrej Ostapchuk",
            rating: 2,
            numReviews: 9,
            description: "This is the picture with a volume and a depth of space."
        },
        {
            // _id :'2',
            name: "Bastet Goddess",
            slug: "egyptian-bastet-goddess",
            category: "Art deco",
            image: "/images/3.jpg",
            price: 312,
            countInStock: 5,
            brand: "HomeLoft",
            rating: 3,
            numReviews: 23,
            description: "Cold cast silver color Egyptian Cat Bastet statue for home decor."
        },
        {
            // _id :'3',
            name: "Alarm Clock",
            slug: "alarm-clock",
            category: "Vintage",
            image: "/images/2.jpg",
            price: 139,
            countInStock: 10,
            brand: "Bulova",
            rating: 2,
            numReviews: 6,
            description: "Luminous Hours And Minute Hands. The perfect clock for an office, classroom, bedroom, bathroom and any room in your home."
        },
        {
            // _id :'4',
            name: "Diamond Bracelet",
            slug: "white-gold-bracelet",
            category: "Bracelets",
            image: "/images/4.jpg",
            price: 2790.75,
            countInStock: 4,
            brand: "Alan Miller",
            rating: 4,
            numReviews: 57,
            description: "Gorgeous sparkling hinged bangle aligned with round brilliant cut diamonds and sapphires alternately set in high polished 14kt white gold. (D 1/2 carat total weight, S 1/2 carat total weight)."
        },
        {
            // _id :'5',
            name: "Cerries",
            slug: "cerries-tognet",
            category: "Impressionistic",
            image: "/images/5.jpg",
            price: 256,
            countInStock: 1,
            brand: "Tognet",
            rating: 5,
            numReviews: 107,
            description: "This unique and original contemporary artwork 'Cherries'."
        },
        {
            // _id :'6',
            name: "The weather we have been",
            slug: "the-weather-we-have-been",
            category: "Impressionistic",
            image: "/images/6.jpg",
            price: 2790.75,
            countInStock: 5,
            brand: "Steven Page Prewitt",
            rating: 3.5,
            numReviews: 42,
            description: "The weather we have been. This is the colorful masterpiece."
        },
        {
            // _id :'7',
            name: "Peacock Wall Clock",
            slug: "peacock-wall-clock",
            category: "Vintage",
            image: "/images/7.jpg",
            price: 1599,
            countInStock: 4,
            brand: "Dorisha Enterprise",
            rating: 3.5,
            numReviews: 237,
            description: "Great colors and elegant look, good choice for wall decor. Perfect for Housewarming gift, holiday gift."
        },
        {
            // _id :'8',
            name: "Egyptian Gods",
            slug: "gods-of-the-egyptian",
            category: "Art deco",
            image: "/images/8.jpg",
            price: 159,
            countInStock: 45,
            brand: "Design Toscano",
            rating: 4,
            numReviews: 342,
            description: "Museum quality collectible home decor figurine sculptures-Horus, Anubis, Serqet, Sekhmet and Tutankhamen."
        },
        {
            // _id :'9',
            name: "Sunburst wall clock",
            slug: "sunburst-wall-clock",
            category: "Retro",
            image: "/images/9.jpg",
            price: 589,
            countInStock: 3,
            brand: "Royale Enamel",
            rating: 4.5,
            numReviews: 451,
            description: "Handmade 1950s-style sunburst clock."
        },


    ]
}
export default data;
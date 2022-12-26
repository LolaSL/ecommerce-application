import bcrypt from 'bcryptjs';

const data = {
    eventList: [

            {
              "id": "01",
              "title": "Modernism in jewelry today",
              "type": "Lectures ",
              "imageUrl": "https://www.nms.ac.uk/media/1156397/800editsmj6.jpg?width=682.9268292682926&height=700",
              "alt": "Modernism in jewelry today",
              "information": "Modernist design emerged in the early 20th century as a response to changes in technology and society. Simplified, clean lines replaced ornamentation, and new materials were embraced.From the mid-1940s designers and makers from Scandinavia and Finland led the way within the Modernist jewellery movement. Individual artists and designers pushed aside traditional ideas of production and adopted new influences - often drawing inspiration from the natural environment. They created unique beautiful works that demonstrated restraint, simplicity and functionality. In the late 1950s British artists and designers began to create similar work. British Modernist jewellery became defined by the use of textural, sculptural gold work, inspired by nature and often incorporating large gemstones",
              "informationSource": "Global Arts, Cultures and Design.",
              "reference": "'Modernist Jewellery'",
              "date": "19 September 2023, Tu. ",
              "time": "15.00",
              "location": "Arts Shop, Hall N1. ",
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
              "date": "11 November 2023, Th. ",
              "time": "19.00",
              "location": "Hall 2. ",
              "language": "en"
            },
            {
              "id": "03",
              "title": "JOSEPH BULOVA.",
              "type": "Lectures",
              "imageUrl": "https://storge.pic2.me/c/1360x800/547/542443963df57.jpg",
              "information": "In 1875, just as America was entering its golden age of industry and progress, one visionary leader would rise to ignite a series of iconic moments in our nation’s history – and transform the way the world perceived time. Fueled by the era’s risk-taking ethos, Joseph Bulova presented one innovation after the next. Ultimately opening a small store in downtown New York City that would mark the beginning of his lifelong quest: to craft supreme quality timepieces for an ever-changing and dynamic landscape. With an unwavering drive for perfection, efficiency and precision, quality craftsmanship became the foundation upon which Joseph Bulova built his brand. But what fueled the brand’s continual progress was its spirit of invention - pursuing innovation and technology both within the timepiece industry – and beyond.",
              "informationSource": "Bulova site company resorce.",
              "reference": "'JOSEPH BULOVA.'",
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
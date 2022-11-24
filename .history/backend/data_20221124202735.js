import bcrypt from 'bcrypt';

const data = {
    userList: [
        {
            name: Lola,
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234567890')
        },
        {
            name: Jackson,
            email: 'jack_black@example.com',
            password: bcrypt.hashSync('1234567890')

        },
        {

        },
        {

        },  {

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
        }
    ]
}
export default data;
module.exports = function() {
    return {
        products: [
            {id:1, name:"Iphone 11", price:1000, imageUrl:'1.jpg', description:'idare eder', category: 'Telefon'},
            {id:2, name:"Iphone 12", price:2000, imageUrl:'2.jpg', description:'idare', category: 'Telefon'},
            {id:3, name:"Iphone 13", price:3000, imageUrl:'3.jpg', description:'iyi', category: 'Telefon'},
            {id:4, name:"Iphone 13 Pro", price:4000, imageUrl:'4.jpg', description:'idare eder', category: 'Telefon'},
            {id:5, name:"Iphone 14", price:5000, imageUrl:'5.jpg', description:'idare eder', category: 'Bilgisayar'},
            {id:6, name:"Iphone 15", price:6000, imageUrl:'6.jpg', description:'idare eder', category: 'Bilgisayar'}
        ],
        categories: [
            {id:1, name: "Telefon"},
            {id:2, name:"Bilgisayar"},
            {id:3, name:"Elektronik"}

        ],
        orders: []
    }
}
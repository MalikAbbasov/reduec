// const arr =[2,43,4,3,2,1,2]
// const result = arr.reduce((a,b)=>a+b)
// console.log(result);
// const obj = {
//     name : "Malik",
//     age :19,
//     isStudent : true

// }
// const property = prompt("bilmek istediyiniz melumati daxil edin")
// console.log(obj);
// console.log(property);

// const arr = [
//     {
//         "id": 2,
//         "description": "Sweet and savory sauces relishes spreads and seasonings",
//         "name": "Condiments"
//     },
//     {
//         "id": 1,
//         "description": "Soft drinks coffees teas beers and ales",
//         "name": "Beverages"
//     },
//     {
//         "id": 3,
//         "description": "Desserts candies and sweet breads",
//         "name": "Confections"
//     },
//     {
//         "id": 4,
//         "description": "Cheeses",
//         "name": "Dairy Products"
//     },
//     {
//         "id": 5,
//         "description": "Breads crackers pasta and cereal",
//         "name": "Grains/Cereals"
//     },
//     {
//         "id": 6,
//         "description": "Prepared meats",
//         "name": "Meat/Poultry"
//     },
//     {
//         "id": 7,
//         "description": "Dried fruit and bean curd",
//         "name": "Produce"
//     },
//     {
//         "id": 8,
//         "description": "Seaweed and fish",
//         "name": "Seafood"
//     }
// ]
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i].id > "3") {
// //         console.log(arr[i]);
// //     }
// // }
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i].name.toLowerCase().includes("s".toLowerCase())) {
// //         console.log(arr[i]);
// //     }
// // }

// arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
// console.log(arr);
// arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
// console.log(arr);
// arr.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
// console.log(arr);


// task-1

// function check(name) {
// if (name== name.toLowerCase() || name == name.toUpperCase()) {
//     return true 
// }
// else{
//     return false
// }

// }
// console.log(check("MAlIK"));


// task-2
// const arr = ["salmaa","men","apelsin","alma","herkesesalam"]
// function check(herf) {
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>6) {
//             arr1.push(arr[i])
//         }

//     }
//     return arr1
// }
// console.log(check());


// task-3
// const checkFile =(filename)=>{
//     const result = filename.slice(filename.lastIndexOf("."));
//     return result
// }
// console.log(checkFile("index.html"));
// console.log(checkFile("index.css"));
// console.log(checkFile("index.js"));



// task-4

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.net",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
// function check(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id > "5") {
//             console.log(users[i].address);
//         }
//     }
// }
//     console.log(check(users));


// function check(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id%2!==0 && users[i].website.includes(".net")) {
//             console.log(users[i].website);
//         }
        
//     }
// }
//     console.log(check(users));

// function check(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id%2===0 ) {
//             console.log(users[i].company);
//         }
        
//     }
// }
//     console.log(check(users));
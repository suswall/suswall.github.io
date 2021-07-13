let json = [
    [
        "Spinach Pizzas Make the Monday Madness Go Away!",
        "Get this dellicious Spinach Stuffed Pizza today.",
        "spinach.jpg"
    ],
    [
        "Margherita Pizzas are Back!",
        "We brought back our fan favorite, the margherita pizza.",
        "example.jpg"
    ],
    [
        "Summer Pizzas are now available!",
        "Try our Peach Sus Pizza and the Sussy Vegetable Pizza for a limited time.",
        "summer.png"
    ],
    [
        "Sus Road Ice Cream + More!",
        "Try our new ice cream flavors on your next visit.",
        "icecream.png"
    ],
    [
        "View All Posts",
        "See the rest of our posts.",
        "float.png"
    ]
]
    let i = 0;
    json.forEach(e => {
        i++;
        if (i <= 5) {
            let r = "e"+i.toString()
            let clone = $("div#tc").clone();
            clone.attr("id", r)
            clone.find("h1").text(e[0])
            clone.find("img").attr("src", "img/"+e[2])
            clone.find("p").text(e[1])
            console.log(r)
            if (document.getElementById(r) == null) {
                console.log("inserted")
                
            }
        }
    });
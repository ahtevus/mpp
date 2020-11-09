var myData = {
    "products":[
        {
            "title": "Creme de la Mer",
            "category": "moisturizers",
            "description": "Helps heal dryness with deep moisture",
            "filename_front": "cremedelamer1.png",
            "filename_back": "creme_back.png",
            "rating": 4.5,
            "price": 95,
            "sizes": 5,
            "ind_best_sellers": true,
            "ind_new": false,
            "benefits":["anti-inflammation / soothing", "lines / wrinkles", "early signs of aging", "antioxidant protection"]
        },
        {
            "title": "The Moisurizing Soft Cream",
            "category": "moisturizers",
            "description": "Deeply hydrates and comforts",
            "filename_front": "lamer_empty.png",
            "filename_back": "creme_back.png",
            "rating": 4.5,
            "price": 95,
            "sizes":5,
            "ind_best_sellers":false,
            "ind_new": false,
            "benefits":["anti-inflammation / soothing", "lines / wrinkles", "early signs of aging", "antioxidant protection", ]
        },
        {
            "title": "The Moisurizing Cool Gel Cream",
            "category": "moisturizers",
            "description": "Light gel, calmsand refreshes. Velvet finish.",
            "filename_front": "moist_cool.png",
            "filename_back": "creme_back.png",
            "rating": 4.5,
            "price": 95,
            "sizes":3,
            "ind_best_sellers":false,
            "ind_new": false,
            "benefits":["anti-inflammation / soothing", "lines / wrinkles", "early signs of aging", "antioxidant protection", ]
        },
        {
            "title": "The Eye Concentrate",
            "category": "eye treatments",
            "description": "Reduce the look of dark circles for a brighter, healthier look",
            "filename_front": "theeye.png",
            "filename_back": "eye_back.png",
            "rating": 5,
            "price": 235,
            "sizes": 0,
            "ind_best_sellers":false,
            "ind_new": true,
            "benefits":["anti-inflammation / soothing", "lines / wrinkles", "dark circles", ]
        },
        {
            "title": "The Regenerating Serum",
            "category": "serums",
            "description": "Visibly diminishes lines and wrinkles",
            "filename_front": "rs1.png",
            "filename_back": "rs2.png",
            "rating": 5,
            "price": 375,
            "sizes": 2,
            "ind_best_sellers":false,
            "ind_new": true,
            "benefits":["lines / wrinkles", "early signs of aging", ]
        },
        {
            "title": "The Treatment Lotion",
            "category": "watery lotions",
            "description": "Hydrates, energizes and preps",
            "filename_front": "tl1.png",
            "filename_back": "tl2.png",
            "rating": 4.5,
            "price": 115,
            "sizes": 2,
            "ind_best_sellers":true,
            "ind_new": false,
            "benefits":["anti-inflammation / soothing", "lines / wrinkles", "early signs of aging", ]
        },
        {
            "title": "The Cleansing Foam",
            "category": "cleansers and toners",
            "description": "Delicate foam purifies and revitalizes",
            "filename_front": "cf1.png",
            "filename_back": "cf2.png",
            "rating": 4.5,
            "price": 25,
            "sizes": 2,
            "ind_best_sellers":true,
            "ind_new": false,
            "benefits":["cleansing / toning",  ]
        },
        {
            "title": "The Cleansing Micellar Water",
            "category": "cleansers and toners",
            "description": "Rinseless cleanse, removes waterproof makeup",
            "filename_front": "cmw.png",
            "filename_back": "tl2.png",
            "rating": 4.5,
            "price": 55,
            "sizes": 2,
            "ind_best_sellers":false,
            "ind_new": false,
            "benefits":["cleansing / toning",  ]
        },
        {
            "title": "The Renewal Oil",
            "category": "specialists",
            "description": "Nourishes and softens for an nstant glow",
            "filename_front": "ro1.png",
            "filename_back": "ro2.png",
            "rating": 4.5,
            "price": 135,
            "sizes": 2,
            "ind_best_sellers":false,
            "ind_new": false,
            "ind_most_loved": true,
            "benefits":["anti-inflammation / soothing", "antioxidant protection"]
        },
        {
            "title": "The Soft Fluid Long Wear Foundation Broad Spectrum SPF 20",
            "category": "color",
            "description": "Hydrates and nourishes with buildable coverage, lumious finish",
            "filename_front": "spf1.png",
            "filename_back": "spf2.png",
            "rating": 4.5,
            "price": 125,
            "sizes": 28,
            "ind_best_sellers":false,
            "ind_new": false,
            "ind_most_loved": true,
            "benefits":["uneven skintone", "lines / wrinkles", "antioxidant protection", "color coverage"]
        },
    ],
    "categories":[
        {"title": "moisturizers"},
        {"title": "eye treatments"},
        {"title": "serums"},
        {"title": "watery lotions"},
        {"title": "cleansers and toners"},
        {"title": "specialists"},
        {"title": "color"},
    ],
    "benefits":[
        {"title": "anti-inflammation / soothing"},
        {"title": "uneven skintone"},
        {"title": "lines / wrinkles"},
        {"title": "early signs of aging"},
        {"title": "antioxidant protection"},
        {"title": "dark circles"},
        {"title": "cleansing / toning"},
        {"title": "color coverage"},
    ]
};

var inputData = myData;
var selectedCategory=[];
var selectedBenefit=[];
var productCounter=0;
var sortValue='none';


$.get( "mustache/product.mustache", null, function(template) {
    let html = Mustache.render( template, inputData );
    document.getElementById("target").innerHTML = html;
    document.getElementById("category_counter").innerHTML = inputData.products.length;
});

$.get( "mustache/filter.mustache", null, function(template) {
    let html = Mustache.render( template, inputData );
    document.getElementById("categories").innerHTML = html;
});

$.get( "mustache/footer.mustache", null, function(template) {
    let html = Mustache.render( template );
    document.getElementById("footer").innerHTML = html;
});


function categoryfilter(categoryhtml, evt) {
    // console.log(evt.currentTarget.className);
    if(evt.currentTarget.className=='body__filter-element'){
        evt.currentTarget.className= "body__filter-element--active";
    }
    else{
        evt.currentTarget.className='body__filter-element';
    }

    let category = categoryhtml.innerHTML;
    if(selectedCategory.includes(category)){
        selectedCategory = selectedCategory.filter(el => el!=category);
        // productCounter--;
    }
    else{
        selectedCategory.push(category);
        // productCounter++;
    }
    loadProducts();
}

function benefitfilter(benefithtml, evt) {

    if(evt.currentTarget.className=='body__filter-element'){
        evt.currentTarget.className= "body__filter-element--active";
    }
    else{
        evt.currentTarget.className='body__filter-element';
    }

    let benefit = benefithtml.innerHTML;
    if(selectedBenefit.includes(benefit)){
        selectedBenefit = selectedBenefit.filter(el => el!=benefit);
    }
    else{
        selectedBenefit.push(benefit);
    }
    loadProducts();
}

function compareBenefit(arr1,arr2){
    return arr2.every(val => arr1.includes(val));
}

function pickSort(value){
    // console.log("works!!" + value);
    sortValue=value;
    loadProducts();
}

function clearAllFilters(){
    selectedCategory=[], selectedBenefit=[];
    $('.body__filter-element--active')
        .addClass('body__filter-element')
        .removeClass('body__filter-element--active');
    loadProducts();
}

function loadProducts(){
    let data=[], finaldata=[];

    if(selectedCategory.length>0){
        for(i=0;i<inputData.products.length;i++){
            if(selectedCategory.includes(inputData.products[i].category)){
                data.push(inputData.products[i])
            }
        }
    }
    else{
        data=inputData.products;
    }

    if(selectedBenefit.length>0){
        for(i=0;i<data.length;i++){
            if(compareBenefit(data[i].benefits,selectedBenefit)){
                finaldata.push(data[i]);
            }
        }
    }
    else{
        finaldata=data;
    }

    switch(sortValue){
        case 'none':
            finaldata = finaldata.sort((a, b) => a.price - b.price);
            break;
        case 'lowtohigh':
            finaldata = finaldata.sort((a, b) => a.price - b.price);
            break;
        case 'hightolow':
            finaldata = finaldata.sort((a, b) => b.price - a.price);
            break;
        case 'highrating':
            finaldata = finaldata.sort((a, b) => b.rating - a.rating);
            break;
        case 'new':
            let newarray=[];
            finaldata.forEach((el) => {
                if(el.ind_new==true){
                    newarray.unshift(el);
                }
                else{
                    newarray.push(el);
                }
            });
            finaldata=newarray;
            break;

    }

    productCounter = finaldata.length;
    (selectedCategory.length>0 || selectedBenefit.length>0) 
        ? document.getElementById("clearall").innerHTML = "CLEAR ALL"
        : document.getElementById("clearall").innerHTML = ""
    
    finaldata = {"products":finaldata};
    $.get( "mustache/product.mustache", null, function(template) {
        var info = Mustache.render(template,finaldata);
        document.getElementById("target").innerHTML = info;
        document.getElementById("category_counter").innerHTML = productCounter;
    });  
}









  

  













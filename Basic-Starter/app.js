const url = 'https://course-api.com/javascript-store-products';

// console.log(url)


const spinnerErrorDiv = document.querySelector('.products-center');



const fetchProducts = async () =>{
    spinnerErrorDiv.innerHTML = `<div class="loading"></div>`
     try{
     let products = await fetch(url)
       let data = await products.json()
       
       return data;
     }catch(err){
        spinnerErrorDiv.innerHTML = `<p class="error">Error While Fetching Data.....</p>`
     }
}



const displayProduct = (list) =>{
     const productsData = list.map((product)=>{

   const {id} = product;
   const {name,price} = product.fields;
   const {url} = product.fields.image[0]
        return `<a href="product.html?id=${id}" class="single-product">
               <img src="${url}" alt="" class="single-product-img img" alt="${name}">
              <footer>
                <h5 class="name">${name}</h5>
                <span class="price">Rs ${price}/-</span>
              </footer>
             </a>`
     }).join('')
     spinnerErrorDiv.innerHTML = ` <div class="products-container">${productsData}</div>`
}

const start = async () =>{
    const data = await fetchProducts()
    displayProduct(data)
}
start()


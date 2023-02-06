const productDom = document.querySelector('.product')
//   alert('hello')

const url = 'https://course-api.com/javascript-store-single-product';


const fetchProduct = async () =>{
   // console.log(window.location.search).

   const params = new URLSearchParams(window.location.search)
   const id = params.get('id')
   console.log(id)
   try{
      
      let product = await fetch(`${url}?id=${id}`)
      let data = await product.json();
     
      return data
   }catch(e){
      console.log(e)
   }
}


const displayProduct = (data) =>{

   const {company,colors,description,name,price,image} = data.fields;
   const {url} = image[0];
   document.title = name;

    const colorsData = colors.map((color)=>{
        return `<span class="product-color" style="background-color: ${color};"></span>`
    }).join('')

   productDom.innerHTML = `<div class="product-wrapper">
   <img src="${url}" alt="" class="img">
   <div class="product-info">
      <h3 class="title">${name}</h3>
      <h5>${company}</h5>
      <span>Rs ${price} /-</span>
      <div class="colors">
         ${colorsData}
      
      </div>
   </div>
   <p>${description}</p>
   <button class="btn">Add To Cart</button>
</div>`
}

const start = async () =>{
    const singleProduct = await fetchProduct()
   displayProduct(singleProduct)
}

start()


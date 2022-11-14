const cardsMenu = document.querySelector('.cards-menu')

const cartArray = localStorage.getItem('cart') ?
	JSON.parse(localStorage.getItem('cart')) : []

const changeTitle = (restourant) => {
	const restaurantTitle = document.querySelector('.restaurant-title')

	restaurantTitle.textContent = restourant.name
}

const addToCart = (cartItem) => {
	if (cartArray.some((item) => item.id === cartItem.id)){
		cartArray.map((item => {
			if (item.id === cartItem.id){
				item.count++
			}
			return item
		}))
	} else {
		cartArray.push(cartItem)
	}
	
	localStorage.setItem('cart', JSON.stringify(cartArray))
}

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price }) => {
        const card = document.createElement('div')

        card.classList.add('card')

        
        card.innerHTML = `
        <div class="card">
						<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>							
							<div class="card-info">
								<div class="ingredients">
                                ${description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price}</strong>
							</div>
						</div>`
		card.querySelector('.button-card-text').addEventListener('click', () =>{
				const cartItem	=

				addToCart({name, price,id, count:1})
		})

        cardsMenu.append(card)
    })
}

if (localStorage.getItem('restaurant')){
fetch('./db/${restourant}')
    .then((Response) => Response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
} else {
	window.location.href = '/'
}
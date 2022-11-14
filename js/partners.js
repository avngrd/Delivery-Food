const cardsRestaurants = document.querySelector('.cards-restaurants')

const renderItems = (data) => {
    data.forEach(({image, kitchen, name, price, products, stars, time_of_delivery}) => {
        const a = document.createElement('a')
        a.setAttribute('href', '/restaurant.html')
        a.classList.add('add')
        a.classList.add('card-restaurant')
        a.dataset.products = products

        a.innerHTML = `
        <a href="restaurant.html" class="card card-restaurant">
						<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${time_of_delivery}</span>
							</div>							
							<div class="card-info">
								<div class="rating">
								${stars}
								</div>
								<div class="price">${price}</div>
								<div class="category">${kitchen}</div>
							</div>						
						</div>
					</a>`

        a.addEventListener('click', (e) => {
            e.preventDefault()
            const link = a.dataset.products

            localStorage.setItem('restaurant', link)

            window.location.href = '/restaurant.html'
        })

        cardsRestaurants.append(a)
    })
}

fetch('./db/partners.json')
    .then((Response) => Response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
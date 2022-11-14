const cart = () => {

    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')
    const buttonSend = modalCart.querySelector('.button-primary')
    const resetCart = () => {
        body.innerHTML = ''
        localStorage.removeItem('cart')
        modalCart.classList.remove('is-open')
    }

    const incrementCount = (id) => {
        const cartArray =JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {

            if (item.id === id){
                item.count++
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
    }

    const discrementCount = (id) => {
        const cartArray =JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {

            if (item.id === id){
                if (item.count > 0) {
                    item.count--
                } else {
                    item.count = 0
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
    }

    const renderItems = (data) => {
        body.innerHTML = ''
        data.forEach(({name, price,id, count}) => {
            const cartElem = document.createElement('div')
            
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
                <span class="food-name">${name}</span>
					<strong class="food-price">${price}</strong>
					<div class="food-counter">
					<button class="counter-button btn-dec">-</button>
					<span class="counter">${count}</span>
					<button class="counter-button btn-inc">+</button>
					</div>
            `
            cartElem.querySelector('.btn-dec').addEventListener('click', () => {
            })
            cartElem.querySelector('.btn-inc').addEventListener('click', () => {  
            })
            body.append(cartItem)
        })
    }

    body.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.classList.contains('btn-inc')){
            incrementCount(e.target.dataset.index)
        }else if (e.target.classList.contains('btn-dec')){
            discrementCount(e.target.dataset.index)
        }
    })

    buttonSend.addEventListener('click ',() => {
        const cartArray = localStorage.getItem('cart')

        fetch(' '),{
            method:'POST',
            body: cartArray
        }
        .then(Response => {
            if (Response.ok)({

            })
            .catch(e => {

            })
        })
    })

    buttonCart.addEventListener('click', ()=> {
        JSON.parse(localStorage.getItem('cart'))

        if(localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }
        modalCart.classList.add('is-open')
    })
    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')
    })
}
cart()
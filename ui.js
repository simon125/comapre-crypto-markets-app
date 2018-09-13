class UI {
    constructor() {
        this.listGroupUl = document.querySelector('#cryptoLiContainer')
        this.liArr = {}
        this.cryptoMarketActive = document.querySelector('#marketChoice').querySelector('input[type="radio"]:checked').value
        this.liBitmarket = {}
    }

    setCryptoMarketActive() {
        this.cryptoMarketActive = document.querySelector('#marketChoice').querySelector('input[type="radio"]:checked').value

    }
    switchDisplayMarket(displayBitBay, displayBitmarket) {

        if (this.cryptoMarketActive === 'BitBay') {
            this.clearListGroup()
            displayBitBay()
        } else if (this.cryptoMarketActive === 'Bitmarket') {
            this.clearListGroup()
            displayBitmarket()
        } else if (this.cryptoMarketActive === 'Both') {
            this.clearListGroup()
            displayBitBay()
            displayBitmarket()
        }
    }
    clearListGroup() {
        this.listGroupUl.innerHTML = ''
    }



    createSingleLi(cryptoData, name) {
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between bg-secondary my-2'
        li.id = name
        li.innerHTML = `
                    <h4 class="mx-4 text-center">${name} <img src="./images/${name}.png" class="img-fluid"></h4>
                    <h5>volume <span class="badge badge-primary li-volume">${cryptoData.volume.toFixed(4)}</span></h5>
                    <h5>Max price <span class="badge badge-success li-max">${cryptoData.max.toFixed(4)}</span></h5>
                    <h4>Price <span class="badge badge-info li-av">${cryptoData.last.toFixed(4)}</span></h4>
                    <h5>Min price <span class="badge badge-danger li-min">${cryptoData.min.toFixed(4)}</span></h5>
                    <button class="btn btn-outline-light">Add to collection</button>
        `
        this.listGroupUl.appendChild(li)
        this.liArr[name] = li
    }

    createSingleLiBitmarket(cryptoData, name) {
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between bg-secondary my-2'
        li.setAttribute('name', name)
        li.innerHTML = `
                    <h4 class="mx-4 text-center">${name} <img src="./images/${name}.png" class="img-fluid"></h4>
                    <h5>volume <span class="badge badge-primary li-volume">${cryptoData.volume.toFixed(4)}</span></h5>
                    <h5>Max price <span class="badge badge-success li-max">${cryptoData.high.toFixed(4)}</span></h5>
                    <h4>Price <span class="badge badge-info li-av">${cryptoData.last.toFixed(4)}</span></h4>
                    <h5>Min price <span class="badge badge-danger li-min">${cryptoData.low.toFixed(4)}</span></h5>
                    <button class="btn btn-outline-light">Add to collection</button>
        `
        this.listGroupUl.appendChild(li)
        this.liBitmarket[name] = li
    }

    updateLi(cryptoData, name) {

        const li = this.liArr[name]
        const oldValue = li.querySelector('.li-av').innerText * 1
        const newValue = cryptoData.last

        if (oldValue === newValue) {
            li.classList.remove('border-success')
            li.classList.remove('border-warning')
        } else if (oldValue > newValue) {
            li.classList.remove('border-success')
            li.classList.add('border-warning')
        } else if (oldValue < newValue) {
            li.classList.add('border-success')
            li.classList.remove('border-warning')
        }

        li.querySelector('.li-volume').innerHTML = cryptoData.volume.toFixed(4)
        li.querySelector('.li-max').innerHTML = cryptoData.max.toFixed(4)
        li.querySelector('.li-av').innerHTML = cryptoData.last.toFixed(4)
        li.querySelector('.li-min').innerHTML = cryptoData.min.toFixed(4)
    }
}

const bitbayData = new Bitbay()
const bitmarketData = new Bitmarket()
const ui = new UI()

const showResultsFromBitbay = () => {

    bitbayData.cryptos.forEach(crypto => {
        bitbayData.getCryptoData(crypto, 'PLN')
            .then(loadedCryptoData => ui.createSingleLi(loadedCryptoData, crypto))
    })

    //const bitBayInterval = setInterval(updateResultsFromBitbay, 100000)
}
const showResultsFromBitmarket = () => {
    bitmarketData.cryptos.forEach(crypto => {
        bitmarketData.getCryptoData(crypto, 'PLN')
            .then(loadedCryptoData => ui.createSingleLiBitmarket(loadedCryptoData, crypto))
    })
}

// showResultsFromBitmarket()




const updateResultsFromBitbay = () => {
    bitbayData.cryptos.forEach(crypto => {
        bitbayData.getCryptoData(crypto, 'PLN')
            .then(loadedCryptoData => {
                console.log('cicuej wchodze')
                ui.updateLi(loadedCryptoData, crypto)
            })
    })
}

//ui.displayMarketsResults()

//showResultsFromBitbay()

// bitbayData.getCryptoData('BTC', 'PLN')
//     .then(data => console.log(data))

// bitbayData.getPriceBTC('USD')
//     .then(data => console.log(data))

document.querySelector('#marketChoice').addEventListener('change', e => {
    e.target.parentElement.parentElement.querySelectorAll('label').forEach(el => el.classList.remove('active'))
    e.target.parentElement.classList.add('active')
    ui.setCryptoMarketActive()
    ui.switchDisplayMarket(showResultsFromBitbay, showResultsFromBitmarket)
})

document.querySelector('#groups').addEventListener('change', e => {
    e.target.parentElement.parentElement.querySelectorAll('label').forEach(el => el.classList.remove('active'))
    e.target.parentElement.classList.add('active')

})
document.querySelector('#sortMethods').addEventListener('change', e => {
    e.target.parentElement.parentElement.querySelectorAll('label').forEach(el => el.classList.remove('active'))
    e.target.parentElement.classList.add('active')

})



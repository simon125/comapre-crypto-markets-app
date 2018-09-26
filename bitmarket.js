class Bitmarket {
    constructor() {
        this.cryptos = ['BTC', 'LTC', 'BCC', 'XRP', 'ETH', 'BTG']
        this.cryptos1 = ['PLN', 'EUR', 'BTC']
    }

    async getCryptoData(crypto1, crypto2) {


        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.bitmarket.pl/json/${crypto1}PLN/ticker.json`)
        console.log(response)

        const responseData = await response.json()

        return responseData

    }

    async getPriceBTC(crypto) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://bitbay.net/API/Public/BTC${crypto}/all.json`)
        console.log(response)
        const responseData = await response.json()
        return responseData
    }
}
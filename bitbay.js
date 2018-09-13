class Bitbay {
    constructor() {
        // this.crypto1 = crypto1
        // this.crypto2 = crypto2
        this.cryptos = ['BTC', 'BCC', 'LTC', 'ETH', 'LSK', 'GAME', 'DASH', 'BTG', 'KZC', 'XIN', 'XRP', 'XMR', 'ZEC', 'GNT', 'OMG', 'FTO', 'REP', 'ZRX', 'PAY', 'BAT', 'NEU']
        this.cryptos2 = ['PLN', 'EUR', 'USD', 'BTC']

    }

    async getCryptoData(crypto1, crypto2) {
        const response = await fetch(`https://bitbay.net/API/Public/${crypto1}${crypto2}/all.json`, {
            mode: 'no-cors'
        })
        console.log(response)
        const responseData = await response.json()
        return responseData
    }

    async getPriceBTC(crypto) {
        const response = await fetch(`https://bitbay.net/API/Public/BTC${crypto}/all.json`, {
            mode: 'no-cors'
        })
        console.log(response)
        const responseData = await response.json()
        return responseData
    }
}

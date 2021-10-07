"use strict"

const fetch = require('node-fetch')
const url = 'https://api-pub.bitfinex.com/v2/'

const pathParams = 'candles/trade:1m:tBTCUSD/hist' // Change these based on relevant path params. /last for last candle
const queryParams = '' // Change these based on relevant query params

async function request() {
    try {
        const req = await fetch(`${url}/${pathParams}?${queryParams}`)
        const response = await req.json()
        console.log(`STATUS ${req.status} - ${JSON.stringify(response)}`)
    }
    catch (err) {
        console.log(err)
    }
}

request()
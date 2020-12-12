export default function initFetchBiticoin() {
    fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(json =>{
        const btcPrice = document.querySelector('[data-btc]');
        btcPrice.innerHTML = json.USD.sell;
        console.log(json.USD.sell);
    })
    .catch(err =>{
        console.log(Error(err));
    });
}


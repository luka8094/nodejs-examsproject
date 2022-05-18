<script>

    const topCurrency = [
        { id: 1, currencyName: "D0ge", rate: 1000.0},
        { id: 2, currencyName: "digitM0ney", rate: 950.0},
        { id: 3, currencyName: "MinerBucks", rate: 930.0},
        { id: 4, currencyName: "NewGold", rate: 900.0},
        { id: 5, currencyName: "CryptoHype", rate: 899.0},
        { id: 6, currencyName: "funneymoney", rate: 850.0},
        { id: 7, currencyName: "hushbucks", rate: 810.0},
        { id: 8, currencyName: "my256Bits", rate: 790.0},
        { id: 9, currencyName: "donttellanyoneDollars", rate: 780.0},
        { id: 10, currencyName: "smugglersPlatinum", rate: 700.0},
    ]

</script>

<div class="splash">

</div>
<section class="crypto-currency-highlights">
    <h2>TRENDING</h2>
    <ul>
        {#each topCurrency as currency, i}
            <li>
                <p>{currency.id}: {currency.currencyName}, rate: {currency.rate}</p>
            </li>
        {/each}
    </ul>
</section>
<section class="crypto-currency-highlights">
    <h2>MOST BUY-INS</h2>
    <ul>
        {#each topCurrency as currency, i}
            <li>
                <p>{currency.id}: {currency.currencyName}, rate: {currency.rate}</p>
            </li>
        {/each}
    </ul>
</section>


<style>
    .splash{
        display: flex;
        height: 500px;
        width: calc(100% - 10px);
        background: #71A48B;
        border: dashed 1px black;
    }

    .crypto-currency-highlights{
        display: flex;
        flex-direction: column;
        height: 500px;
        width: calc(100% - 10px);
        background: #98EFC3;
    }
</style>
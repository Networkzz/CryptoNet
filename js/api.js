const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const HTMLResponse = document.querySelector("#main-table");

fetch(API_URL)
  .then((response) => response.json())
  .then((coins) => {
    coins.forEach((coin) => {
      let row = document.createElement("tr");
      let change = coin.price_change_percentage_24h;

      let tdFix = document.createElement("td");
      tdFix.appendChild(document.createTextNode(`💜`));
      row.appendChild(tdFix);

      let tdRank = document.createElement("td");
      tdRank.appendChild(document.createTextNode(coin.market_cap_rank));
      row.appendChild(tdRank);

      let tdName = document.createElement("td");
      tdName.appendChild(document.createTextNode(`${coin.name}`));
      row.appendChild(tdName);

      let tdPrice = document.createElement("td");
      tdPrice.appendChild(document.createTextNode(`${coin.current_price} $`));
      row.appendChild(tdPrice);

      let td24h = document.createElement("td");
      td24h.appendChild(
        document.createTextNode(`${coin.price_change_percentage_24h}`)
      );
      row.appendChild(td24h);
      
      let tdMarketCap = document.createElement("td");
      tdMarketCap.appendChild(document.createTextNode(`${coin.market_cap} $`));
      row.appendChild(tdMarketCap);

      let tdTotalVolume = document.createElement("td");
      tdTotalVolume.appendChild(
        document.createTextNode(`${coin.market_cap} $`)
      );
      row.appendChild(tdTotalVolume);

      HTMLResponse.appendChild(row);
    });
  });

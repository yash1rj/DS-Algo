function maxStockProfit(prices) {
    const minPrice = Math.min(...prices);
    const dayOfMin = prices.indexOf(minPrice);
    const maxAfterMin = Math.max(...prices.slice(dayOfMin));
    const profit = maxAfterMin - minPrice;
    return (maxAfterMin > minPrice) ? profit : 0;
}
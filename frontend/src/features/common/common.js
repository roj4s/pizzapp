export const getCurrentViewPortSize = ()=>{

    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };

}

export const USD_EUR_EXCHANGE_RATE = 0.88;


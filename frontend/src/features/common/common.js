export const getCurrentViewPortSize = ()=>{

    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };

}

export const USD_EUR_EXCHANGE_RATE = 0.88;

export const getModalCustomStyles = () => {
    const vpSize = getCurrentViewPortSize();
    return  { content: vpSize.width > 600 ? {
        width: '50%',
        height: '85%',
        left: '25%',
        top: '10%',
        zIndex: 100,
        padding: 5
        } : {
            width: '80%',
            left:'5%',
            top:'10%',
            height: '80%',
            padding: '20px'
            }
        };    
};

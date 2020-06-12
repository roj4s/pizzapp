const API_URL = process.env.REACT_APP_API_URL;

class OrderApi {
    static getAllOrders() {
      
      if(!API_URL)
      {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
      }

      return fetch(`${API_URL}/order`)
      .then(response => {

        if(response.status === 404 || response.status === 500){
            return {
                success: false,
                data: response.status
            };
        }
         
        return {
            success: true,
            data: response.json()
        };

      }).catch(error => {

        return {
            success: false,
            data: error
        };

      });
    }

    static createOrder(data) {

        if(!API_URL)
        {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
        }

        return fetch(`${API_URL}/order`, {
            method: 'POST',          
            headers: {
            'Content-Type': 'application/json'
            },          
            body: JSON.stringify(data)
        }).then(response => {

            if(response.status === 404 || response.status === 500){
                return {
                    success: false,
                    data: response.status
                };
            }
            
            return {
                success: true,
                data: {}
            }

        }).catch(error => {

            return {
                success: false,
                data: error
            }

        });

    }

}


export default OrderApi;
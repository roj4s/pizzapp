const API_URL = process.env.REACT_APP_API_URL;

class PizzaApi {
    static getAllPizzas() {
      
      if(!API_URL)
      {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
      }

      return fetch(`${API_URL}/pizza`)
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

    static getImageUrlFromImageName(imageName){
        return `${API_URL}/image/${imageName}`
    }

  };
  
  export default PizzaApi;
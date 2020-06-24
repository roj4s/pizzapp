const API_URL = process.env.REACT_APP_API_URL;

class UserApi {
    static getLoggedIn() {
      
      if(!API_URL)
      {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
      }

      return fetch(`${API_URL}/user/auth/loggedIn`, {credentials: 'include'})
      .then(response => {

        if(response.status !== 200){
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

    static logIn(user) {
      
      if(!API_URL)
      {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
      }

      return fetch(`${API_URL}/user/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(response => {

        if(response.status !== 200){
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

    static logOut(){

      if(!API_URL)
      {
          return Promise.resolve({
              success: false,
              data: 'Undefined API_URL'
          });
      }

      return fetch(`${API_URL}/user/auth/logout`, {
        credentials: 'include'
      })
      .then(response => {

        if(response.status !== 200){
            return {
                success: false
            };
        }
         
        return {
            success: true
        };

      }).catch(error => {

        return {
            success: false
        };

      });

    }

  };
  
  export default UserApi;
import axios from "axios"


  let URL = "https://safe-sands-85755.herokuapp.com/api/products/?format=json"
  let CATEGORY = "https://safe-sands-85755.herokuapp.com/api/categories/?format=json"
  let GET = {
    data: () => axios.get(URL),
    category:() => axios.get(CATEGORY)
  }
  
  export default GET 



















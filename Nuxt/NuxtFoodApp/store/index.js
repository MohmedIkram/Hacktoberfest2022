import { v4 as uuidv4 } from "uuid";
export const state = () => ({
  // value : 'rest',
  fooddata : [],
  cart : []
});

export const getters = {
  totalPrice : state => {
    if(!state.cart.length) return 0;
    return state.cart.reduce((ac , nextItem) => ac + +nextItem.combinedPrice, 0)
  },
  cartItemCount : state => {
    if(!state.cart.length) return 0;
    return state.cart.reduce((ac , nextItem) => ac + +nextItem.count, 0)
  }
}

export const mutations = {
  updateValue : (state, payload) => {
    state.fooddata = payload
  },
  addToCart : (state,payload) => {
    payload.id = uuidv4()
    state.cart.push(payload);
  }
}

export const actions = {
  async getFoodData({
                      state,
                      commit,
  }){
    if(state.fooddata.length) return;
    try{
      await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants',{
        headers : {
          "Content-Type" : "application/json",
          "x-api-key" : process.env.AWS_API_KEY
      }
      }).then(response => response.json()).then(data => {
        console.log(data);
        commit('updateValue', data)
      })
    }catch (err){
      console.log(err);
    }
  }
}

import * as haraj from './haraj.json'
import { createStore } from 'framework7/lite';

//let items = haraj.data.posts.items;
const store = createStore({
  state: { items:[] },
  getters: {
    gettItems({ state }) {
      return state.items;
    }
  },
  actions: {
     
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    getUsers({ state }) {
      state.users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
    },
    getItems({ state }) {
      fetch("https://graphql.haraj.com.sa", {
        "headers": {
          "content-type": "text/plain; charset=utf-8",
        },
        "body": "{\"query\":\"query($ids:[Int]) { posts( id:$ids) {\\n\\t\\titems {\\n\\t\\t\\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId bodyTEXT city tags imagesList commentStatus commentCount upRank downRank geoHash\\n\\t\\t}\\n\\t\\tpageInfo {\\n\\t\\t\\thasNextPage\\n\\t\\t}\\n\\t\\t} }\",\"variables\":{\"ids\":[96032625,96032151,96032029,96031911,96031844,96031807,96031637,96031522,96030903,96030393,96029268,96029248,96028794,96028526,96028458,96028281,96027811,96027575,96026750,96026595,96026187]}}",
        "method": "POST"
      })
        .then((res) => res.json())
        .then((data) => {
          //state.items = [...state.items,...data.data.posts.items]
          state.items = [...state.items,...data.data.posts.items]
          console.log("from the fetch", state.items);
        })
    }
  },
})
export default store;

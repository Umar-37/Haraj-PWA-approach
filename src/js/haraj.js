import * as haraj from './haraj.json'
import { createStore } from 'framework7/lite';
import { element } from 'svelte/internal';


//let items = haraj.data.posts.items;
//let idAds = []


const store = createStore({
  state: { items: [], itemsDetail: [],idAds:[] },
  getters: {
getIds({ state }) {
      return state.idAds;
    },
    gettItems({ state }) {
      return state.items;
    }, gettItemsDetail({ state }) {
      return state.itemsDetail;
    },

  },
  actions: {

   
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    getUsers({ state }) {
      state.users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
    },
    getItems({ state }, { page }) {
      const obj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query($tag:String,$city:String,$page:Int) { posts( tag:$tag, city:$city, page:$page) {\n\t\titems {\n\t\t\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId\n\t\t}\n\t\tpageInfo {\n\t\t\thasNextPage\n\t\t}\n\t\t} }`,
          variables:
          {
            "tag": "حراج الأجهزة", "city": "الشرقيه", "page": page
          },
        }),
      }



      fetch("https://graphql.haraj.com.sa", obj)
        .then((res) => res.json())
        .then((data) => {
          //state.items = [...state.items,...data.data.posts.items]
          state.items = [...state.items, ...data.data.posts.items]

          //to sort the ads based on the recent updated ad
          state.items.sort((a, b) => {
            return b.updateDate - a.updateDate;
          });
          
          //get all Ids for the ads and fetch based on it
          let theIds = state.items.map(item => {
            return item.id
          })
          store.dispatch('getItemsDetail',theIds)
          
        })


    },
    getItemsDetail(state,items) {
      const objDetails = {

        "method": "POST",
        "headers": {
          "Content-Type": "text/plain; charset=utf-8",
        },
        "body": `{\"query\":\"query($ids:[Int]) { posts( id:$ids) {\\n\\t\\titems {\\n\\t\\t\\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId bodyTEXT city tags imagesList commentStatus commentCount upRank downRank geoHash\\n\\t\\t}\\n\\t\\tpageInfo {\\n\\t\\t\\thasNextPage\\n\\t\\t}\\n\\t\\t} }\",\"variables\":{\"ids\":[${items}]}}`,
      }
      fetch("https://graphql.haraj.com.sa", objDetails)
        .then((res) => res.json())
        .then(dataDetail => {
          dataDetail=dataDetail.data.posts.items
          console.log(dataDetail)

          dataDetail.forEach(element => {
          });
          store.state.itemsDetail = [...store.state.itemsDetail, ...dataDetail]
        })
    }
  },
})

export default store;

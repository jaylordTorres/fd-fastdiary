import apisauce from 'apisauce'
import { url } from '../constant'
import { metrics } from './../style/global' 

const create = (baseURL = url.picsum) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getRandom = (w=200, h=400) => api.get(`${w}/${h}/?random`)
  const getList = () => api.get(`list`)

  return {
    getRandom,
    getList
  }
}

const createQuote = (baseURL = url.quotesondesign) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getQuote = () => api.get('wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')

  return {
    getQuote
  }
}

// utitlity for urls
export const util = {
  getRandomUri: (w=metrics.width, h=metrics.height) => {
    const randomString = Math.floor(Math.random() * 100)
     return `${url.picsum}${w}/${h}/?random&${randomString}`
  },
  createUriPicsum: (w=metrics.width, h=metrics.height, _id) => {
     return `${url.picsum}${w}/${h}/?image&${_id}`
  },
  createUriPicsumGray: (w=metrics.width, h=metrics.height, _id) => {
     return `${url.picsum}g/${w}/${h}/?image&${_id}`
  }
}

export default {
  create, createQuote
}

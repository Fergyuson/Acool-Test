import { defineNuxtPlugin } from '#app'
import Swiper from 'swiper'  
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

Swiper.use([Navigation, Pagination, Autoplay])

export default defineNuxtPlugin(() => {})
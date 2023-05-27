import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import player from './player.js'
consts = {
    per_buy10 : 2,
    ads : [
        {base:10  ,scale:1e3 },
        {base:100 ,scale:1e4 },
        {base:1e4 ,scale:1e5 },
        {base:1e6 ,scale:1e6 },
        {base:1e9 ,scale:1e8 },
        {base:1e13,scale:1e10},
        {base:1e18,scale:1e12},
        {base:1e24,scale:1e15}
    ],
    tick : {base:1e3,scale:10},
    boosts : {base:20,scale:15},
    per_boost : 2,
    red_per_tick : {base:0.11,scale:0.015},
    gals : {base:80,scale:60},
}

function getMaxUnlAD(){
    return Math.min(player.boosts+4,8)
}
function getADSteps(ix){
    return Math.floor(player.ads[ix].bought/10)
}
function getADCost(ix){
    return consts.ads[ix].base * Math.pow(consts.ads[ix].scale, getADSteps(ix))
}
function getTickCost(){
    return consts.tick.base * Math.pow(consts.tick.scale, player.tick)
}
function getADMaxSteps(ix,am){
    return Math.floor(Math.log(am/(consts.ads[ix].base * 10))/Math.log(consts.ads[ix].scale))
}function getTickMaxSteps(ix,am){
    return Math.floor(Math.log(am/consts.tick.base)/Math.log(consts.tick.scale))
}
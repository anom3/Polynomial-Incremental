var app = new Vue({
    el: "#app",
    data: {
        player: player
    },
    methods: {
        buyMarketingGenerator(i) {
            let g = this.player.marketing[i]
            if (g.cost > this.player.money) return
            this.player.money -= g.cost
            g.cost *= 1 + (i+1) * 0.25
            g.amount += 1
            g.bought += 1
        }
    }
})
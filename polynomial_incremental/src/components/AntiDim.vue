<script>
import { computed } from '@vue/reactivity';
import player from '../player.js'
export default{
    props: ['index'],
    computed: {
        amt() {
            return player.ads[Number(index)-1].amt
        }
    }
}
</script>
<template>
    {{ index }}{{ ["st","nd","rd","th"][Math.min(Number(index)-1,3)] }} AD
    {{ amt }} (x {{ 1 }})
</template>
<script>
export default{
    props: ['index']
}
</script>
<template>
    {{ index }}{{ ["st","nd","rd","th"][Math.min(index-1,3)] }} AD
    {{  }}
</template>
<template>
    <button :class="shape">
        {{label}}
    </button>
</template>



<script>
export default {
    name: 'AppButton',
    props:{
        label: String,
        shape:{
            type: String,
            default: 'square'
        }
    }
}
</script>


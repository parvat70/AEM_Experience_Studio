<template>
    <input :type="typeText" :class="input_shape" :placeholder="placeholder" :value="textValue">
</template>

<script>
export default {
    name: 'Input',
    props:{
        typeText:{
            type: String,
            default: 'text'
        },
        input_shape: String,
        placeholder: String,
        textValue: String
    }
}
</script>

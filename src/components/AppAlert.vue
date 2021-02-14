<template>
    <div class="alert" :class="type">
        <p class="alert-title">{{title}}</p>
        <p>{{text}}</p>
        <button class="btn" :class="type" v-if="closable" @click="$emit('close')">{{title}}</button>
    </div>
</template>
<script>
export default {
    emits:['close'],
    props:{
        text:String,
        title:String,
        closable: {
            type:Boolean,
            required: false,
            default:false
        },
        type: {
            type:String,
            required: false,
            default:'primary',
            validator(val){
                return ['primary', 'danger', 'warning'].includes(val)
            }
        },
        
    }
}
</script>
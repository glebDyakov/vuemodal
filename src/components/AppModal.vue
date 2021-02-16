<template>
    <div class="modal-backdrop" @click="$emit('close')">
        <div class="modal">
            <h3>Это заголовок модального окна</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, pariatur.</p>

        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    emits:['close']
}
</script>
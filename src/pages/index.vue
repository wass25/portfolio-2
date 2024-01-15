<script setup>
import Informations from '../components/Informations.vue'
import travaux from '../components/travaux.vue';
</script>

<template>
    <div class="containerrr mx-auto">
        <Informations />

    </div>

    <div>
        <Suspense>
            <travaux />
        </Suspense>
    </div>

    <div class="containerrr mx-auto">

    </div>
</template>

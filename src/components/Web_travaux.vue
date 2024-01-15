<template>
    <div class="relative cursor-pointer" id="contient" v-for="travail in web" :key="travail.id">
        <router-link :to="'/Description/Web/' + travail.id
            ">
            <img class="m-auto w-[100%] " id="image" v-if="travail.Image !== null" :src="travail.Image">
            <div class="absolute top-1/3 opacity-0 left-[20%]" id="texte">
                <p class="font-general-semibold text-6xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{
                    travail.Titre
                }}</p>
            </div>
        </router-link>
    </div>
</template>


<script setup lang="ts">

import { supabase } from "../supabase.js";

let { data: web, error } = await supabase
    .from("Web")
    .select("*")


if (error) {
    console.log("erreur données web", { error });
}
</script>
<template>
    <div class="relative" id="contient1" v-for="categorie in Portfolio" :key="categorie.id_categorie">
        <router-link :to="'/Categories/' + categorie.Nom">
            <img id="image1" :src="categorie.Image">
            <div class="absolute top-[20%]">
                <p class="font-general-semibold text-9xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{
                    categorie.Nom
                }}</p>
                <span id="texte1" class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light opacity-0">{{
                    categorie.Description
                }}</span>
            </div>
        </router-link>
    </div>
</template>


<script setup>

import { supabase } from "../supabase.js";

let { data: Portfolio, error } = await supabase
    .from("Categories")
    .select("*")

if (error) {
    console.log("erreur données Categories", { error });
}
</script>
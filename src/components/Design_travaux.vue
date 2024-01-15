<template>
    <div class="relative cursor-pointer" id="contient" v-for="travail in design" :key="travail.id">
        <router-link :to="'/Description/Design/' + travail.id
            ">
            <img class="m-auto w-[200%] " id="image" v-if="travail.Image !== null" :src="travail.Image">
            <video v-if="travail.Video !== null" autoplay id="image">
                <source :src="travail.Video" type="video/mp4">
            </video>
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



let { data: design, error } = await supabase
    .from("Design")
    .select("*")


if (error) {
    console.log("erreur données Design", { error });
}


</script>
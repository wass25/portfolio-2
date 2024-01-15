<template>
    <div class="relative cursor-pointer" id="contient" v-for="travail in audiovisuel" :key="travail.id">
        <router-link :to="'/Description/Videos/' + travail.id
            ">
            <iframe width="100%" height="400" :src="travail.Video" id="image">
            </iframe>
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

let { data: audiovisuel, error } = await supabase
    .from("Audiovisuel")
    .select("*")


if (error) {
    console.log("erreur données audiovisuel", { error });
}
</script>
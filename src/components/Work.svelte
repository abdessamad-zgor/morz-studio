<script lang="ts">
//    import {onMount} from "svelte";
import { index } from "$lib";

    function slide(dir: -1|1){
        console.log("slide to ", dir)
            index.set($index+dir)
    }

</script>

<section class="relative w-[100vw] min-h-screen">

<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-" on:click={()=>console.log("bomm")}></div>

<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-"></div>
<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-"></div>
<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-"></div>
<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-"></div>
<div class="w-[50px] h-[50px] rounded-full bg-[linear_gradient(rgba(0,0,80,1), rgba(40, 18, 21, 0.8))] animate-"></div>
<div class="w-[100vw] h-[100vh] absolute inset-0" >

<h1 class="text-6xl font-noto underline-8"></h1>
<div class="flex flex-col w-full ">
<h2 class="text-5xl font-light">
<div class="w-[0px] h-[0px]">

</div>
piquer un ballon

</h2>
</div>
</div>

<div class="absolute top-0 bottom-0 left-0 p-20" on:click={()=>slide(-1)}></div>
<div class="absolute top-0 bottom-0 right-0 p-20" on:click={()=>slide(1)}></div>
</section>


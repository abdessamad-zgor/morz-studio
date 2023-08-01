
<script lang="ts">
import Stripe from "./Stripe.svelte";
import {index} from "$lib";
    function slide(dir: -1|1){
        console.log("slide to ", dir)
        index.set($index+dir)
    }
 
</script>

<section  class="w-[100vw] z-0 relative min-h-screen backdrop-blur bg-amber-100 bg-slate-100 relative">

    <div class="relative flex flex-row justify-end px-10">
        <h1 class="font-extrabold absolute z-10 text-[400px] text-sky-700 font-bodo">Morz

        <span class=" absolute bottom-[100px] right-0 z-[12] px-20 text-xl font-bold font-noto">Studio</span>
        </h1>
        
    </div>

    <p class="px-20 text-5xl absolute bottom-[20px] font-bold font-mo text-amber-400">
    a creative studio for code crafted websites <br> we make cool things and we love it .
    </p>
    <div class="absolute top-0 bottom-0 right-0 z-10 p-20" on:click={()=>slide(1)}></div>
    <Stripe />
</section>

<style>
#banner{
    background-image: url("banner-bg.png");
    background-size: 70%;
    background-repeat: repeat;
}

#btn {
    box-shadow: -5px 5px 0 aliceblue;
}

</style>

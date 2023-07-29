
<script lang="ts">
    import {index} from "$lib";
    function slide(dir: -1|1){
        console.log("slide to ", dir)
        index.set($index+dir)
    }
 
</script>
<section id="banner" class="w-[100vw] relative min-h-screen px-20 pt-40 ">
<h1 class="font-extrabold text-[150px] text-amber-200 font-bodo">Morz Studio</h1>
<p class="w-6/12 pl-20 text-3xl border-b-8 font-mo bg-amber-200 border-sky-600 text-sky-950">
un studio creative à mission d'exprimer votre vision artistique en code
</p>
<div class="flex flex-row justify-end w-full my-20">

<button id="btn" class="px-8 py-2 text-xl rounded bg-amber-600 text-uppercase text-sky-100">réserver un appel</button>
</div>
<div class="absolute top-0 bottom-0 right-0 z-10 p-20" on:click={()=>slide(1)}></div>
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

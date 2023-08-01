<script lang="ts">
let expand = false;
function ToggleExpand(){
    expand = !expand
}
</script>

<header class="fixed z-10 flex flex-row items-center w-full ">
    <button on:click={ToggleExpand} class={`${!expand? "flex flex-row items-center w-1/12 border-b-8 rounded-br bg-white/30 backdrop-blur border-sky-600": "flex flex-col items-center w-1/12 border-b-8 rounded-br bg-white/30 backdrop-blur border-sky-600"}`}>
    <img src="/logo.png" class="w-full" alt="">
    <ul class={`${!expand?"hidden": "flex flex-col px-4 divide-y"}`}>
        <li class="text-3xl font-light">Home</li>
        <li class="text-3xl font-light">Works</li>
        <li class="text-3xl font-light"> Pitch</li>
    </ul>
    </button>

</header>

<style>
*{
    transition: 0.5s all ease-in;
}
</style>

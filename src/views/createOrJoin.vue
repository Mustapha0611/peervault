<template>
    <div class=" h-auto md:max-h-[100vh] flex flex-col md:flex-row  md:px-20 px-10 justify-between gap-10 text-font-color">
        
            <section class="flex flex-col items-center flex-1">
                <h3 class="py-5 font-semibold text-2xl">Create A Room</h3>
                <ul class="w-full md:w-[80%] h-[250px] md:h-[500px] shadow-bg rounded-xl flex justify-center px-10 md:px-24 flex-col">
                    <li class="lg:text-3xl pb-5">Enter Room details</li>
                    <li class="lg:text-3xl pb-5">Add  file</li>
                    <li class="lg:text-3xl pb-5">Generate Share ID</li>
                    <li class="lg:text-3xl pb-5">Share the link</li>
                </ul>
                <div class="mt-10">
                    <router-link to="/CreateRoom">
                        <button class="bg-buttonbg px-5 py-3 rounded-md flex items-center gap-4 text-xl hover:bg-transparent border-2 border-buttonbg">Create a Room</button>
                    </router-link>
                </div>
            </section>
            <section class="flex-1 flex flex-col items-center">
                <h3 class="py-5 font-semibold text-2xl">Join A Room</h3>
                <ul class="w-full md:w-[80%] h-[200px] md:h-[500px] shadow-bg rounded-xl flex justify-center md:px-24 px-10 flex-col">
                    <li class="lg:text-3xl pb-5">Get the Shared room ID</li>
                    <li class="lg:text-3xl pb-5">Open the share room</li>
                    <li class="lg:text-3xl pb-5">Access Shared file</li>
                    <!-- <li class="text-3xl leading-loose">Share the link</li> -->
                </ul>
                <div class="my-10">
                   <router-link to="/JoinRoom"> 
                        <button class="bg-buttonbg px-5 py-3 rounded-md flex items-center gap-4 text-xl hover:bg-transparent border-2 border-buttonbg">Join a Room</button>
                    </router-link>
                </div>
            </section>
       
    </div>
</template>
<style>
    .shadow-bg{
        border-radius: 9px;
        background: rgba(0, 0, 0, 0.25);
    }
</style>
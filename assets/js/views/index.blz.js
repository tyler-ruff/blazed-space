/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 0,
                content: home()
            };
            break;
        }
    return data;
}

function home(){
    return `
        <div class="px-5 md:px-0 mt-10 pt-5 md:mt-20">
            <div class="bg-gray-50 py-20">
                <div class="max-w-2xl mx-auto pt-0 md:pt-10">
                    <form method="get" action="https://www.blazed.space/search.html" class="flex items-center">   
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search" name="q" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Any Site in the Blazed Network..." required>
                        </div>
                        <button type="submit" class="hidden md:inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
                    </form>
                    <div class="mx-5">
                        <p class="mt-12 inline-flex">
                        ⚡ Search powered by:&nbsp;<a href="https://programmablesearchengine.google.com/" class="hover:underline">Google</a>
                        </p>
                        <div class="hidden md:inline-flex mt-10 group cursor-pointer" style="float:right">
                            <div x-data="{ dropdownOpen: false }" class="relative">
                                <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block rounded-md bg-gray-50 group-hover:bg-gray-300 hover:bg-gray-300 active:bg-gray-300 p-2 focus:outline-none">
                                <span class="inline-flex">
                                    More Sites
                                </span>
                                <svg class="inline-flex ml-2 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                </button>
                        
                             <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
                                    <div x-show="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                        <a href="https://rocket.blazed.space/" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                            Rocket
                                        </a>
                                        <a href="https://vapor.blazed.space/" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                            Vapor
                                        </a>
                                        <a href="https://triangle.blazed.space/" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                            Triangle
                                        </a>
                                        <a href="https://jupiter.blazed.space/" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                            Jupiter
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

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
                content: results()
            };
            break;
        }
    return data;
}

function results(){
    return `
        <h1 class="text-center py-5 text-2xl font-bold">
        Search Results
        </h1>
        <div class="w-full md:max-w-2xl md:relative md:mx-auto">
            <div class="gcse-searchresults-only"></div>
        </div>
    `;
}

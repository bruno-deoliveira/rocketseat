import { Router } from "./router.js";
/*import { Button } from "./button.js";*/


const router = new Router()
    router.add("/","/page/home.html")
    router.add("/theUniverse","/page/universo.html")
    router.add("/explorer","/page/exploracao.html")
    router.add(404,"/page/404.html")



router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();




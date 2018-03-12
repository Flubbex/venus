import * as ui    from "./ui"
import setup      from "./game"

console.log(Math.floor(Date.now()/1000)
            .toString()
            .slice(6), "Entrypoint");
            
setup(ui,true);

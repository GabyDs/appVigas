class GestorApp{
    constructor(){
        this.longBarra = document.getElementById('long-barra')
        this.moduloElast = document.getElementById('elasticidad-barra')
        this.baseBarra = document.getElementById('base-barra')
        this.alturaBarra = document.getElementById('altura-barra')
        this.cargaDistBarra = document.getElementById('carga-dist-barra')
        this.condicionBorde = document.getElementById('condicion-borde').value
        this.btnCargarBarra = document.getElementById('btn-cargar-barra')

        this.cargarRegistroBarras()

        this.agregarEventListeners()
    }

    agregarEventListeners(){

    }

    cargarRegistroBarras(evento){
        evento.preventDefault()
    }
}

let gestor = new GestorApp()
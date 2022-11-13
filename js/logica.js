const baseDatos = require('./js/base-datos.js')

class GestorApp{
    constructor(){
        this.frmNuevaBarra = document.getElementById('datos-barras')

        this.longBarra = document.getElementById('long-barra')
        this.moduloElast = document.getElementById('elasticidad-barra')
        this.baseBarra = document.getElementById('base-barra')
        this.alturaBarra = document.getElementById('altura-barra')
        this.cargaDistBarra = document.getElementById('carga-dist-barra')
        this.condicionBorde = document.getElementById('condicion-borde')

        this.btnCargarBarra = document.getElementById('btn-cargar-barra')

        this.tablaBarras = document.getElementById('tabla-barras')

        this.cargarRegistroBarras()

        this.agregarEventListeners()
    }

    agregarEventListeners(){
        this.frmNuevaBarra.addEventListener('submit', this.crearRegistroBarras.bind(this))
    }

    crearRegistroBarras(evento){
        evento.preventDefault()

        baseDatos.agregarBarra(
            this.longBarra.value,
            this.moduloElast.value,
            this.baseBarra.value,
            this.alturaBarra.value,
            this.condicionBorde.options[this.condicionBorde.selectedIndex].text,
            this.cargaDistBarra.value
        )
        
        this.longBarra.value = ''
        this.moduloElast.value = ''
        this.baseBarra.value = ''
        this.alturaBarra.value = ''
        this.cargaDistBarra.value = ''
        //this.condicionBorde.value = ''
        
        this.cargarRegistroBarras()
    }

    generarHtmlRegistroBarra(barra){
        return `<tr>
            <td>${barra.longitud}</td>
            <td>${barra.elasticidad}</td>
            <td>${barra.base}</td>
            <td>${barra.altura}</td>
            <td>${barra.condicionBorde}</td>
            <td>${barra.cargaDist}</td>
            <td><input type="button" class="waves-effect waves-light btn-small" onclick="gestorBarras.eliminarRegistroBarra('${barra._id}')" value="Borrar"></input></td>
        </tr>`
    }

    cargarRegistroBarras(){
        baseDatos.obtenerBarras( (barras) => {
            let html = barras.map(this.generarHtmlRegistroBarra).join('')

            this.tablaBarras.innerHTML = html
        })
    }

    eliminarRegistroBarra(id) {
        baseDatos.eliminarBarra(id)

        this.cargarRegistroBarras()
    }
}

let gestorBarras = new GestorApp()
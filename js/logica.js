const baseDatos = require('./js/base-datos.js')
const cross = require('./js/cross-vigas-continuas')

class GestorApp{
    constructor(){
        this.frmNuevaBarra = document.getElementById('datos-barras')
        this.longBarra = document.getElementById('long-barra')
        this.moduloElast = document.getElementById('elasticidad-barra')
        this.baseBarra = document.getElementById('base-barra')
        this.alturaBarra = document.getElementById('altura-barra')
        this.cargaDistBarra = document.getElementById('carga-dist-barra')
        this.condicionBorde = document.getElementById('condicion-borde')
        this.tablaBarras = document.getElementById('tabla-barras')

        //variables que se deben calcular
        this.coefInercia = ''
        this.coefRigidez = ''
        this.coefTransmision = ''

        this.cargarRegistroBarras()

        this.agregarEventListeners()
    }

    agregarEventListeners(){
        this.frmNuevaBarra.addEventListener('submit', this.crearRegistroBarras.bind(this))
    }

    crearRegistroBarras(evento){
        evento.preventDefault()

        this.coefInercia = cross.CoefInercia(this.baseBarra.value,this.alturaBarra.value)
        this.coefRigidez = cross.CoefRigidez(this.condicionBorde.value, this.moduloElast.value, this.coefInercia, this.longBarra.value)
        this.coefTransmision = cross.CoefTransmision(this.condicionBorde.value)

        baseDatos.agregarBarra(
            this.longBarra.value,
            this.moduloElast.value,
            this.baseBarra.value,
            this.alturaBarra.value,
            this.coefInercia,
            this.condicionBorde.options[this.condicionBorde.selectedIndex].text,
            this.coefRigidez,
            this.coefTransmision,
            this.cargaDistBarra.value
        )

        /* Reestable los valores
        this.longBarra.value = ''
        this.moduloElast.value = ''
        this.baseBarra.value = ''
        this.alturaBarra.value = ''
        this.cargaDistBarra.value = ''
        this.coefInercia = ''
        this.coefRigidez = ''
        this.coefTransmision = ''
        */

        this.cargarRegistroBarras()
    }

    generarHtmlRegistroBarra(barra){
        return `<tr>
            <td>${barra.longitud}</td>
            <td>${barra.elasticidad}</td>
            <td>${barra.base}</td>
            <td>${barra.altura}</td>
            <td>${barra.inercia}</td>
            <td>${barra.condicionBorde}</td>
            <td>${barra.rigidez}</td>
            <td>${barra.transmision}</td>
            <td>${barra.cargaDist}</td>
            <td><button type="button" class="btn btn-danger" onclick="gestorApp.eliminarRegistroBarra('${barra._id}')">Borrar</button></td>
        </tr>`
    }

    cargarRegistroBarras() {

        baseDatos.obtenerBarras( (barras) => {
            let html = barras.map(this.generarHtmlRegistroBarra).join('')

            this.tablaBarras.innerHTML = html
        })
    }

    eliminarRegistroBarra(id) {
        baseDatos.eliminarBarra(id)

        this.cargarRegistroBarras()
    }

    metodoCross() {
        baseDatos.contarBarras( (count) => {
            console.log("cantidad barras :", count)
            // aca hay que hacer las operaciones para el metodo de cross
            cross.main(count)
        })
    }
}

let gestorApp = new GestorApp()
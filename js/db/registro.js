var Datastore = require('nedb')

// Persistent datastore with automatic loading
let db = new Datastore({filename: './registro.db', autoload: true})

exports.agregarBarra = function(numero, longitud, base, altura, condicionBorde, cargaDist) {
    var persona = {
        numero: numero,
        longitud: longitud,
        base: base,
        altura: altura,
        condicionBorde: condicionBorde,
        cargaDist: cargaDist
    }

    bd.insert(persona, function(err, nuevoObjeto) {

    })
}
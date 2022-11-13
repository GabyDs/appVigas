var Datastore = require('nedb')

// Persistent datastore with automatic loading
let db = new Datastore({filename: 'db/registro.db', autoload: true})

exports.agregarBarra = function(longitud, elasticidad, base, altura,condicionBorde, cargaDist) {
    var barra = {
        longitud: longitud,
        elasticidad: elasticidad,
        base: base,
        altura: altura,
        condicionBorde: condicionBorde,
        cargaDist: cargaDist,
    }

    db.insert(barra, function(err, nuevoObjeto) {
 
    })
}

exports.obtenerBarras = function (operacion) {
    db.find({}, function(err, barras) {
        if (barras) {
            operacion(barras)
        }
    })
}

exports.eliminarBarra = function(id) {
    db.remove({_id: id}, {}, function(err, numeroRegistrosEliminados) {

    })
}
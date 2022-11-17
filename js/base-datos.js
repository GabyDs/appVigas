var Datastore = require('nedb')

// Persistent datastore with automatic loading
let db = new Datastore({filename: 'db/registro.db', autoload: true})

exports.agregarBarra = function(longitud, elasticidad, base, altura, inercia, condicionBorde, rigidez, transmision, cargaDist) {
    var barra = {
        longitud: longitud,
        elasticidad: elasticidad,
        base: base,
        altura: altura,
        inercia: inercia,
        condicionBorde: condicionBorde,
        rigidez: rigidez,
        transmision: transmision,
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

exports.contarBarras = function(fn) {
    db.count({}, function(err, count) {
        if (count) {
            fn(count)
        }
    })
}
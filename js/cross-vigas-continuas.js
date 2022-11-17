// Funciones Metodo de Cross

exports.CoefInercia = function(base, altura) {
    return ((base * Math.pow(altura, 3))/12) / 100000000
}

exports.CoefRigidez = function(empotramiento, elasticidad, inercia, longitud) {
    if (empotramiento == 1) {
        return (4 * elasticidad * inercia * 1000000000) / longitud
    } else {
        return (3 * elasticidad * inercia * 1000000000) / longitud
    }
}

exports.CoefTransmision = function(empotramiento) {
    if (empotramiento == 1) {
        return 0.5
    } else {
        return 0
    }
}
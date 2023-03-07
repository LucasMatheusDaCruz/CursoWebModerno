let comparaComThis = function(param) {
    console.log(this === param);
}


comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)



let comComThisArrow = param => console.log(this === param)


comComThisArrow(global)


comComThisArrow(module.exports)

comparaComThisArrow = comComThisArrow.bind(obj)
comComThisArrow(obj)

comComThisArrow(module.exports)

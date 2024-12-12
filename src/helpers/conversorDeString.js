module.exports = (objetoParams) => {
    for(let propriedade in objetoParams){
        if(/Id|id/.test(propriedade)){
            // Transforma o array 'objetoParams' de string para número, na posição especificada do for
            objetoParams[propriedade] = Number(objetoParams[propriedade])
        }                
    }
    return objetoParams
}
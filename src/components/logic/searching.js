 export function searching(termino, palabras) {
  
    const normalizar = (texto) => {
        return texto
            .normalize("NFD") 
            .replace(/[\u0300-\u036f]/g, "") 
            .toLowerCase();
    };

    const terminoNormalizado = normalizar(termino);
    
    
    return palabras.filter(palabra => 
        normalizar(palabra.nombre).includes(terminoNormalizado)
    );
}




var GLOBALCAR = (function() {  

    console.log("less is more!");   
    
    // creando el objeto (vacio) box  
    
    var box = {};   
    
    // agregando la propiedad queue (fila)  
    
    box.queue = [];   
    
    // agregando los métodos addItem (agregar item)  
    
    box.addItem = function(car) {    
    
    return box.queue.push(car);  
    
    };   
    
    // agregando los métodos getQueue (recuperar fila)  
    
    box.getQueue = function() {    
    
    return box.queue.join(" - ");  
    
    };   
    
    return box;
    
    })();
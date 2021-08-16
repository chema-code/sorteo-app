export function pause(t) {
    var promise = new Promise(
                   function (resolve, reject) {
              setTimeout(
              function () { 
                   resolve();
              }, t); 
    });
    return promise;
  }

export const  Sortear = async (data, premios, min, max, setParentProgress) => {
    //return new Promise(resolve => {
    let log = [];
    let numerosGanadores = [];
    let ganadores = [];
    console.log('valores', premios, min, max);

    const valorProgreso = 100 / premios;
    const valorOrginalPremios = premios;
    while (premios > 0) {

        log = addLog(log, `Inicio sorteo.`)
        const progreso = valorProgreso * (valorOrginalPremios - premios);
        console.log('progreso', progreso);
        setParentProgress(progreso);
        console.log('premios', premios);

        const numeroPremiado = getRandomInt(min, max)
        //console.log('numeroPremiado', numeroPremiado);

        log = addLog(log, `Número (${numeroPremiado})`)
        const concursante = buscarConcursante(data, numeroPremiado);

        //console.log('concursante', concursante);

        if (concursante === undefined) {
            log = addLog(log, `Número (${numeroPremiado}) no encontrados entre los concursantes.`);
            continue;
        }
        if (buscarPremiado(numerosGanadores, numeroPremiado)) {
            log = addLog(log, `Número (${numeroPremiado}) ya premiado.`);
            continue;
        }
        
        let totalPremios = 1;
        if (concursante.idacomp1 > 0) {
            totalPremios++;
        }
        if (concursante.idacomp2 > 0) {
            totalPremios++;
        }
        if (concursante.idacomp3 > 0) {
            totalPremios++;
        }

        if (premios >= totalPremios) {
            numerosGanadores = addToGanadores(numerosGanadores, numeroPremiado);

            premios = substractPremio(premios, 1);
            ganadores = addToGanadores(ganadores, concursante.idsolicitante);
            log = addLog(log, `Agregar ganador (${numeroPremiado}) premiado, idUnico:${concursante.idsolicitante} quedan ${premios}.`)

            if (concursante.idacomp1 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp1);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante(${concursante.idacomp1}) premiado, quedan ${premios}.`)
            }
            if (concursante.idacomp2 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp2);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante (${concursante.idacomp3}) premiado, quedan ${premios}.`)
            }
            if (concursante.idacomp2 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp3);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante (${concursante.idacomp3}) premiado, quedan ${premios}.`)
            }

            //log = addLog(log, `Número (${numeroPremiado}) premiado, quedan ${premios}.`)
        }
        else{
            log = addLog(log, `Saltamos el número (${numeroPremiado}) porque no quedan suficientes premios, hay:${premios} y se solicitan: ${totalPremios}.`)
        }
        
        await pause(1);
        
    }
    
    log = addLog(log, `Fin sorteo.`)
    return [log, ganadores, numerosGanadores];
    //resolve([log, ganadores]);
//})
}

export const  Sortear2 = async (data, premios, min, max, setParentProgress) => {
    //return new Promise(resolve => {
    let log = [];
    let numerosGanadores = [];
    let ganadores = [];
    console.log('valores', premios, min, max);

    const campo = "idsolicitante";

    let listaPremios = [data.length];
  
    for(var i = 0; i < data.length; i++){
        const valor =eval('data[' + i +'].'+ campo);
        console.log("valor_" + i, valor);
        listaPremios[i] = valor;
        
    }
    
    const valorProgreso = 100 / premios;
    const valorOrginalPremios = premios;
    
    log = addLog(log, `Inicio sorteo.`)

    while (premios > 0) {

       
        const progreso = valorProgreso * (valorOrginalPremios - premios);
        
        console.log('progreso', progreso);
        setParentProgress(progreso);
        console.log('premios', premios);

        const indiceASeleccionar = getRandomInt(1, listaPremios.length-1);
        const numeroPremiado = listaPremios[indiceASeleccionar];
        
        
        // console.log('listaPremios',listaPremios);
        // console.log('indiceASeleccionar',indiceASeleccionar);
        // console.log('listapremios.length', listaPremios.length);
        // console.log('numeroPremiado',numeroPremiado);

        log = addLog(log, `Número seleccionado: (${numeroPremiado})`)
        const concursante = buscarConcursante(data, numeroPremiado);

        //console.log('concursante', concursante);

        if (concursante === undefined) {
            log = addLog(log, `Número (${numeroPremiado}) no encontrados entre los concursantes.`);
            continue;
        }
        if (buscarPremiado(numerosGanadores, numeroPremiado)) {
            log = addLog(log, `Número (${numeroPremiado}) ya premiado.`);
            continue;
        }
        
        let totalPremios = 1;
        if (concursante.idacomp1 > 0) {
            totalPremios++;
        }
        if (concursante.idacomp2 > 0) {
            totalPremios++;
        }
        if (concursante.idacomp3 > 0) {
            totalPremios++;
        }

        if (premios >= totalPremios) {
            listaPremios.splice(indiceASeleccionar,1);

            numerosGanadores = addToGanadores(numerosGanadores, numeroPremiado);

            premios = substractPremio(premios, 1);
            ganadores = addToGanadores(ganadores, concursante.idsolicitante);
            log = addLog(log, `Agregar ganador (${numeroPremiado}) premiado, idUnico:${concursante.idsolicitante} quedan ${premios}.`)

            if (concursante.idacomp1 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp1);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante(${concursante.idacomp1}) premiado, quedan ${premios}.`)
            }
            if (concursante.idacomp2 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp2);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante (${concursante.idacomp3}) premiado, quedan ${premios}.`)
            }
            if (concursante.idacomp2 > 0) {
                ganadores = addToGanadores(ganadores, concursante.idacomp3);
                premios = substractPremio(premios, 1);
                log = addLog(log, `Agregar ganador acompañante (${concursante.idacomp3}) premiado, quedan ${premios}.`)
            }

            //log = addLog(log, `Número (${numeroPremiado}) premiado, quedan ${premios}.`)
        }
        else{
            log = addLog(log, `Saltamos el número (${numeroPremiado}) porque no quedan suficientes premios, hay:${premios} y se solicitan: ${totalPremios}.`)
        }
        
        await pause(1);
        
    }
    
    log = addLog(log, `Fin sorteo.`)
    return [log, ganadores, numerosGanadores];
    //resolve([log, ganadores]);
//})
}



const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}
const buscarConcursante = (data, concursante) => {

    const campo = "idsolicitante";
    const res = data.find(c => eval('c.' + campo) === concursante.toString());
    return res;
}

const buscarPremiado = (data, concursante) => {

    const res = data.find(c => c === concursante.toString());
    if (res === undefined) {
        return false;
    }
    return true;
}

const addToGanadores = (premios, premio) => {
    return [...premios, premio.toString()];
};

const addLog = (log, text) => {
    const fecha = new Date();
    const texto = fecha.toISOString('es-ES') + " " + text
    return [...log, texto];
};

const substractPremio = (premio, cantidad) => {
    return (premio - cantidad);
};
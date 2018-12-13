import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracana/RJ",
        data: "01/06/2018",
        horario: "19h",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component {
    render(){
        /* Mesmo que:
        return  <PlacarContainer partida={dados.partida}
                                 casa={dados.casa}
                                 visitante={dados.visitante}  />; */
        return <PlacarContainer {...dados} clima={'Ensolarado'}/>                         
    }
}
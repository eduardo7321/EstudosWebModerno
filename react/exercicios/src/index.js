import React from 'react'
import ReactDOM from 'react-dom'



//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'


//import { BoaTarde, BoaNoite} from './componentes/Multiplos'


//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>        
        <Pai nome="eudedu" sobrenome="silva" >
            <Filho nome="Filho1" />
            <Filho nome="Filho2" />
            <Filho nome="Filho3" />
        </Pai>
    </div>
    , document.getElementById('root'))


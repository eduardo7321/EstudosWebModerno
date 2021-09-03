import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//import { BoaTarde, BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>        
        <Saudacao tipo="Bom dia" nome="Dudu" />
    </div>
    , document.getElementById('root'))
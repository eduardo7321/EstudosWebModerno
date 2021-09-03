import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

import { BoaTarde, BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Eduardo" />
        <BoaNoite nome="Dudu" />
    </div>
    , document.getElementById('root'))
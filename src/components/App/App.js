import { useState } from 'react'
import { Box, SliderInput } from '../../components'
import NumberFormat from 'react-number-format'
import { DEFAULT_AMOUNT, DEFAULT_TERM, INTEREST_RATE } from '../../constants'

function App() {
  const [valueAmount, setValueAmount] = useState(DEFAULT_AMOUNT)
  const [valueTerm, setValueTerm] = useState(DEFAULT_TERM)

  const getValueAmount = (e) => setValueAmount(e)
  const getValueTerm = (e) => setValueTerm(e)
  return (
    <div className="app">
      <Box>
        <header>
          <h1>Simulá tu crédito</h1>
        </header>
        <div className="container">
          <SliderInput
            currency
            title="Monto Total"
            getValueFn={getValueAmount}
            defaultValue={DEFAULT_AMOUNT}
            min={5000}
            max={50000}
          />
          <SliderInput title="Plazo" getValueFn={getValueTerm} defaultValue={DEFAULT_TERM} min={3} max={24} />
        </div>
        <div className="box-cuota">
          <p>
            Cuota fija por mes
            <NumberFormat
              value={((valueAmount / valueTerm) * 100) / INTEREST_RATE}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              prefix={'$'}
            />
          </p>
        </div>
        <div className="box-actions">
          <button className="btn-primary">Obtené credito</button>
          <button className="btn-default">Ver detalle de cuotas</button>
        </div>
      </Box>
    </div>
  )
}

export default App

import { PropTypes } from 'prop-types'
import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import NumberFormat from 'react-number-format'

const SliderInput = ({ currency, getValueFn, defaultValue, max, min, title }) => {
  const [value, setValue] = useState(defaultValue)
  const [errorInput, setErrorInput] = useState(false)

  const handleChange = (e) => {
    if (Number(e.value) < min || Number(e.value) > max) {
      setErrorInput(true)
    } else {
      setValue(e.value)
      getValueFn(value)
      setTimeout(() => setErrorInput(false), 2500)
    }
  }

  const currencyFormat = `${currency ? '$ ' : ''}`

  return (
    <div>
      <div className="header-slider">
        <div className="header-slider-col">
          <h3>{title}</h3>
        </div>
        <div className="header-slider-col">
          <NumberFormat
            value={value}
            onValueChange={handleChange}
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            prefix={currencyFormat}
          />
        </div>
      </div>
      {errorInput && (
        <div className="error-slider">
          El valor debe estar entre {min} y {max}
        </div>
      )}
      <div className="content-slider">
        <Slider
          onChange={(value) => setValue(value)}
          value={value}
          step={1}
          min={min}
          max={max}
          className="slider-control"
        />
        <div className="content-values">
          <p>
            <NumberFormat
              value={min}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              prefix={currencyFormat}
            />
          </p>
          <p>
            <NumberFormat
              value={max}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              prefix={currencyFormat}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

SliderInput.propTypes = {
  currency: PropTypes.bool,
  getValueFn: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  title: PropTypes.string,
}

export default SliderInput

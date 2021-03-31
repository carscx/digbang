import { PropTypes } from 'prop-types'

const Box = ({ children }) => {
  return <div className="box">{children}</div>
}

Box.propTypes = {
  children: PropTypes.node,
}

export default Box

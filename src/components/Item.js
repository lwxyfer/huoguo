import React, { PropTypes } from 'react'

const Item = ({ setList, index, title }) => (
  <li
    onClick={setList}
  >
    List: {title} | I: {index}
  </li>
)

Item.propTypes = {
  setList: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Item

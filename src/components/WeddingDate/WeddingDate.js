import React from 'react'
import PropTypes from 'prop-types'

const WeddingDate = (props) => (
    <p className={props.classes ? props.classes.join(' ') : null}>April 23, 2022</p>
)

WeddingDate.propTypes = {
    classes: PropTypes.array
}

export default WeddingDate;
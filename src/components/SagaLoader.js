import React from 'react'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

const SagaLoader = ({ visible }) => (
  <div className="loaderRings">
    <Loader
      type="Rings"
      color="#333333"
      height={40}
      width={40}
      visible={visible}
    />
  </div>
)

SagaLoader.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default SagaLoader

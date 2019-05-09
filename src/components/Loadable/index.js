import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

function Loadable({ loading, children }) {
  if (loading) {
    return <Loader />;
  }
  return children;
}
Loadable.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Loadable;

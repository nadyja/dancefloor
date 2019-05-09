import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

function Loadable({ loading, children }) {
  if (loading) {
    return <BarLoader width={250} height={6} css={{ margin: '50px auto' }} />;
  }
  return children;
}
Loadable.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Loadable;

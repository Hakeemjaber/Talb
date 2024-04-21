import React, {useState} from 'react';
import TalbContext from './TalbContext.';

const TalbProvider = props => {
  const [cart, setCart] = useState([]);

  const stateValue = {
    cart,
    setCart,
  };

  return (
    <TalbContext.Provider value={stateValue}>
      {props.children}
    </TalbContext.Provider>
  );
};

export default TalbProvider;

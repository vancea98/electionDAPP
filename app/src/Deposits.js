import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default ({ drizzle, drizzleState }) => {
  const classes = useStyles();
  return (
    <div className='section'>
      <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        /> 
      </div>
  );
}
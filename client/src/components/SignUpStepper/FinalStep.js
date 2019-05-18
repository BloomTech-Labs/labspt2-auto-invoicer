import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

const FinalStep = props => {
    const {id, history} = props;
    const [timer, setTimer] = useState(15);
    const time = timer > 1 ? 'seconds' : 'second';

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      history.push(`/user/${id}/dashboard`);
    }
  }, [timer]);
    return (
        <>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                You'll be redirected to the dashboard in {timer} {time}.
            </Typography>
        </>
        
    )
}

export default FinalStep;
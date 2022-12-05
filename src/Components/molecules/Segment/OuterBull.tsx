import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useContext } from "react";


export const OuterBull = () => {


  const hitNumber = (count: number) => {
  //   if(true){
  //     setMagnification(1);
  //   }else{
  //     setMagnification(1);
  //   }
  //   setNumber(count);
  //   setthrowCount(throwCount + 1);
    
    };

  return <Box onClick={() => hitNumber(25)} css={styles.outer} />;
};

const styles = {
  outer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 12.5%;
    width: 12.5%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: red;
    z-index: 6;
  `,
};

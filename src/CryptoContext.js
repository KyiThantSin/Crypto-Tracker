import { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({children}) => {
    const [currency , setCurrency] = useState('MMK')
    const [symbol, setSymbol] = useState('Ks')
    
    useEffect(()=>{
        if(currency ==='USD') setSymbol('$')
        else if(currency ==='MMK') setSymbol('Ks')
    },[currency])

    return ( 
        <Crypto.Provider value={{currency,setCurrency, symbol}}>
            {children}
        </Crypto.Provider>
     );
}
 
export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}
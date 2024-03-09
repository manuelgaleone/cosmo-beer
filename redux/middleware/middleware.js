const middleware = (storeAPI) => (next) => (action) => {
    // Ignora l'azione 'persist/PERSIST' per evitare il warning
    if (action.type === 'persist/PERSIST' || action.type === 'persist/REHYDRATE') {
      return next(action);
    }
  
    // Fai qualcosa con l'azione
    // console.log('Dispatching action:', action);
  
    // Invia l'azione al middleware successivo o al reducer
    return next(action);
  };
  
  export default middleware;
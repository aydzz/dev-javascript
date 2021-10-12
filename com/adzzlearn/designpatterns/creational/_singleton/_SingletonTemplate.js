/**
 * Tasks:
 *  Enforce a singleton pattern - DONE
 *  Enforce Unique ID String - PENDING
 */

/**
 * made it _Singleton so I can name the instance generator Singleton.
*/
class _Singleton{
    #ID = Math.random().toString(16).substring(2);
    query(queryString){
        console.log(queryString)
    }
    close(){
        console.log("Connection was terminated!")
    }
    get ID(){
        return this.#ID;
    }
    
}

/**
 * singleton by creating a ieFunction to return a function that returns the instance but checks it if an instance was instantiated previously.
 * using closure to be bale to access outer variables in the inner function.
 */
const Singleton = (function(){
    let singletonInstance;
    return {
        /**
         * Instead of returning a function, i just returned a value instead ( by using ieFunction). ( more neat when taking out the instance )
         * @return {_Singleton}
         */
        instance : (function(){
            if(!singletonInstance){
                singletonInstance = new _Singleton("sample Param");
            }
            return singletonInstance;
        })()
    }

})();

export default Singleton;



/**
 * FOOTNOTES
 *  
 */
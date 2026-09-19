class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    /*String=3[a2[c]]*/ 
    decodeString(s) {
        let stack =[]; //""3
        let currString = ""; //acc
        let currNumber = 0; //0

        for(let char of s){
            if(char==='['){
                //push and reset
                stack.push(currString);
                stack.push(currNumber);

                currString ="";
                currNumber = 0;
            }else if(char===']'){
                //pop
                let number=stack.pop();//3
                let prevString=stack.pop();//""
                currString = prevString + currString.repeat(number); //""accaccacc

            }else if(/\d/.test(char)){
                //if its number multiply that by 10 to get the exact number
                currNumber = currNumber * 10 + parseInt(char);
            }else{
                // build the strings
                currString += char;
            }
        }
        return currString;//accaccacc
    }
}

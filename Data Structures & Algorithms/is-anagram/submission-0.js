class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false;
        }
        let resultSet= new Map();
        
        for(let char of s){
            resultSet.set(char,(resultSet.get(char)||0)+1);
        }
        for(let char of t){
            if(!resultSet.has(char)){
                return false
            }

            resultSet.set(char,resultSet.get(char)-1);
            
            if(resultSet.get(char)===0){
                resultSet.delete(char);
            }

        }
        if(resultSet.size===0){
            return true
        }
        return false
    }
}

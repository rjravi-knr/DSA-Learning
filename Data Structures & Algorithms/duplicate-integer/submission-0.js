class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set();

        for(let curr of nums){
            if(mySet.has(curr)){
                return true;
            }else{
                mySet.add(curr);
            }
        }
        return false
    }
}

/** 两个数不使用四则运算得出和 */
function sum(a, b) {
    if (a == 0) return b
    if (b == 0) return a
    let newA = a ^ b
    let newB = (a & b) << 1
    return sum(newA, newB)
  }

function sum(a, b) {
    if(a===0) return b
    if(b===0) return a
    let r1 = a^b;
    let r2 = (a&b) << 1 
    return r1+r2
}

/** swap替换 */
function swap (arr, left, right) {
    let rightValue = arr[right]
    arr[right] = arr[left]
    arr[left] = rightValue
}

/** bubble sort , O(n*n) */
function bubble (arr) {
    for(let i = arr.length-1;i>0;i--){
        for(let j = 0; j < i; j++ ){
            if(arr[j]>arr[j+1]) swap(arr,j,j+1)
        }
    }
    return arr
}

/** insert sort, O(n*n) */
function insert(arr){
    for(let i = 1; i< arr.length;i++){
        for(let j=i-1;j>=0&&arr[j]>arr[j+1];j--){
            swap(arr,j,j+1)
        }
    }
    return arr
}

/** select sort ,o(n*n)*/
function select(arr) {
    for(let i = 0;i<arr.length-1;i) {
        let min=i
        for(let j=i+1;j<arr.length;j++){
            min = arr[j]<arr[min] ? j: min
        }
        swap(arr,i, min);
    }
    return arr
}

/** merge sort */
function merge(arr, left, right) {
    if(left===right) return;

    let mid = parseInt(left+((right-left)>>1))
    merge(arr,left,mid)
    merge(arr,mid+1,right)

    let tmp = []
    let i = 0;
    let p1 = left;
    let p2 = mid+1;
    while(p1<=mid && p2 <=right){
        if(arr[p1]<arr[p2]){
            tmp[i++] = 
        }
    }
}


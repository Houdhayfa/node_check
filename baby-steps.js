function baby(arr) {
   
   var sum=0
   for (var i =2 ; i< arr.length;i++) {
   sum=sum+parseInt(arr[i]) 
   }
   
   console.log(sum)
   
}

baby(process.argv)
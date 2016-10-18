"use strict";
const reverse= function(arr){
  let newlist=[];
	for(let k=0,n=arr.length-1; k<arr.length-1,n>=0; k=k+1,n=n-1){
		newlist[n]=arr[k];
		};
		return newlist;

};
const array=[1,2,3,4,5,6,7,8]
console.log(reverse(array));
 
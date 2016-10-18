"use strict"
const star=function(st){
    let star1='*';
    for(let i = 0; i < (st+1)/2; i = i + 1) {  
        star1=star1+'**';    
    }
    return star1;
      }
  const space=function(sp){
    let space1='';
    for(let i = 0; i < sp; i = i + 1) {  
        space1=space1+' ';    
    }
    return space1;
      }
  const crystal=function(crst){
    if(crst===0){
      console.log('');
    }
    else if(crst===1){
      console.log('*');
      console.log('*');
    }
    else {
      console.log(space((crst-1)/2)+'*'); 
      let space2=space((crst-1)/2);
      let star2 = "*";      
    for(let i = 0; i < (crst-1)/2; i = i + 1 ) {
      space2=space2.substr(0,space2.length-1);
      star2=star2+"**";    
      console.log(space2+star2);
   }
    let space3="";
    let star3=star(crst-2);
    for(let i = 0; i < (crst+1)/2; i = i + 1 ) {
      space3=space3+' ';
      star3=star3.substr(0,star3.length-2); 
      console.log(space3+star3);   
    }
  }
  }   
  crystal(5);

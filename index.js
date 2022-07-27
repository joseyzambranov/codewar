const arrayDiff = (a,b)=>{
   
    

    var array = []
    if(b==0){
        array = a
       }else if(b.length>1){
       for(var i = 0 ; i <a.length;i++){
           var equal = false;
           for(var j = 0 ; j <b.length& !equal ;j++){
               if(a[i]==b[j])equal=true
           }
           if(!equal)array.push(a[i])
       }
    }else{
       a.filter(i=>i!=b?array.push(i):"")
    }
    return array

}


console.log(arrayDiff([15,-18,17,-10,-14,-4,-18,3,14,6,-17,11,11,0,5],[]))


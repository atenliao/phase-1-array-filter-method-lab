// Code your solution here
const findMatching = (arr, str) =>{
    return arr.filter((input_str)=>{
       return input_str.toUpperCase() === str.toUpperCase()
    })
}

const fuzzyMatch = (arr, str) => {
    return arr.filter((input_str)=>{
           if(input_str.indexOf(str) === 0){
            return input_str.includes(str)
           }
        
                
    })
}


const matchName =(obj, check_name) => {
    return obj.filter(({name})=>{
        return name === check_name
    })
}
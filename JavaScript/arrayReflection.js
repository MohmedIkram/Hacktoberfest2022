inputArr=[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
  ];

  //function here
function reflection (inputArr) {
  inputArr.forEach((row)=>{  
    let left = 0;
    let right = row.length -1;
    while (left<right){
      [row[left] ,row[right]] = [row[right] , row[left]];
      left++;
      right--;
    }
  })
}

function diagonalReflection(inputArr){
  for(let row=0;row<inputArr.length ; row++){
    for(let col=row+1;col<inputArr[row].length ; col++){
        [inputArr[row][col] ,inputArr[col][row]] = [inputArr[col][row] , inputArr[row][col]];
    }
  }
}

function rotateArray( inputArr,  degrees){
  let numberOfRotations = (degrees/90)%4;
  console.log(numberOfRotations)
  while(numberOfRotations-->0){
    diagonalReflection(inputArr);
    reflection(inputArr);
  }
}

const printArray = (inputArr) =>{

  inputArr.forEach((row)=>{
    console.log(row.join('.'))

  })
  

}

rotateArray(inputArr,720);
printArray(inputArr);
  outputArr=[
    [13,9,5,1],
    [14,10,6,2],
    [15,11,7,3],
    [16,12,8,4]
    ]

let equal=true;
outputArr.forEach((row,rowInd)=>{
  row.forEach((val,colInd)=>{
    equal&=val===inputArr[rowInd][colInd];
  })
})
console.log(equal?'They are Equal':'They are not Equal')

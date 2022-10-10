fun selection_sort(sampleArray:IntArray){
    var n=sampleArray.size
    var temp:Int
    for(i in 0..n-1){
        var indexOfMin = i
        for(j in n-1 downTo  i){
            if(sampleArray[j]< sampleArray[indexOfMin])
                indexOfMin=j
        }
        if(i!=indexOfMin){
            temp = sampleArray[i]
            sampleArray[i]= sampleArray[indexOfMin]
            sampleArray[indexOfMin]=temp
        }
    }
}

fun main(arg: Array<String>) {
    println("Before Sort")
    var A = intArrayOf(1, 7, 3, 9, 4)
    for (i in A) print(i)

    selection_sort(A)

    println("
Sorted array is : ")
    for (i in A) print(i)
}

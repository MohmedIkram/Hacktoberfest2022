package main
 
import (
    "container/heap"
    "fmt"
)
 
type HuffmanCodingUSe interface {
    Freq() int
}
 
type HuffmanLeaf struct {
    freq  int
    value rune
}
 
type HuffmanNode struct {
    freq        int
    left, right HuffmanCodingUSe
}
 
func (self HuffmanLeaf) Freq() int {
    return self.freq
}
 
func (self HuffmanNode) Freq() int {
    return self.freq
}
 
type treeHeap []HuffmanCodingUSe
 
func (th treeHeap) Len() int { return len(th) }
func (th treeHeap) Less(i, j int) bool {
    return th[i].Freq() < th[j].Freq()
}
func (th *treeHeap) Push(ele interface{}) {
    *th = append(*th, ele.(HuffmanCodingUSe))
}
func (th *treeHeap) Pop() (popped interface{}) {
    popped = (*th)[len(*th)-1]
    *th = (*th)[:len(*th)-1]
    return
}
func (th treeHeap) Swap(i, j int) { th[i], th[j] = th[j], th[i] }
func buildTree(symFreqs map[rune]int) HuffmanCodingUSe {
    var trees treeHeap
    for c, f := range symFreqs {
        trees = append(trees, HuffmanLeaf{f, c})
    }
    heap.Init(&trees)
    for trees.Len() > 1 {
        a := heap.Pop(&trees).(HuffmanCodingUSe)
        b := heap.Pop(&trees).(HuffmanCodingUSe)
        heap.Push(&trees, HuffmanNode{a.Freq() + b.Freq(), a, b})
    }
    return heap.Pop(&trees).(HuffmanCodingUSe)
}
func printCodes(tree HuffmanCodingUSe, prefix []byte) {
    switch i := tree.(type) {
    case HuffmanLeaf:
        fmt.Printf("%c\t%d\t%s\n", i.value, i.freq, string(prefix))
    case HuffmanNode:
        prefix = append(prefix, '0')
        printCodes(i.left, prefix)
        prefix = prefix[:len(prefix)-1]
        prefix = append(prefix, '1')
        printCodes(i.right, prefix)
        prefix = prefix[:len(prefix)-1]
    }
}

func main() {
    testingStringUse := "abcdefghijklmnopqrstuvwxyz"
    symFreqs := make(map[rune]int)
    for _, c := range testingStringUse {
        symFreqs[c]++
    }
    exampleTree := buildTree(symFreqs)
    fmt.Println("SYMBOL\tWEIGHT\tHUFFMAN CODE")
    printCodes(exampleTree, []byte{})
}
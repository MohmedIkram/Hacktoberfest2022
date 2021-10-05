package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", ItWorks)
	http.ListenAndServe(":5000", nil)
}

func ItWorks(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>It works!</h1>")
}

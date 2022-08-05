package main

import (
	"encoding/json"
	"net/http"
	"time"
)

type Developer struct {
	Name  string `json:"name"`
	Email string `json:"emailAddress"`
	When  string `json:"when"`
}

func getOnCallDeveloper(w http.ResponseWriter, r *http.Request) {
	var dev Developer

	currentTime := time.Now()

	if currentTime.Hour() >= 8 && currentTime.Hour() < 17 {
		dev = Developer{Name: "Jeff", Email: "jeff@hypertheory.com", When: currentTime.String()}
	} else {
		dev = Developer{Name: "Sue", Email: "sue@aol.com", When: currentTime.String()}
	}
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(dev)
}

func main() {
	http.HandleFunc("/", getOnCallDeveloper)

	http.ListenAndServe("", nil)
}

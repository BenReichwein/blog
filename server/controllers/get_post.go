package controllers

import (
	"encoding/json"
	"net/http"
	
	"server/database"

	"github.com/gorilla/mux"
)

// Get all blogs
func GetPost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	res := database.FindPost(params["id"])

	json.NewEncoder(w).Encode(res)
}
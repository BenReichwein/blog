package controllers

import (
	"encoding/json"
	"net/http"
	"server/database"
)

// Get all blogs
func AllBlogs(w http.ResponseWriter, r *http.Request) {
	res := database.GetBlogs()

	json.NewEncoder(w).Encode(res)
}
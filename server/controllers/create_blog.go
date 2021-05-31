package controllers

import (
	"encoding/json"
	"net/http"
	"server/database"
	"server/models"
)

// Create blog
func CreateBlog(w http.ResponseWriter, r *http.Request) {
	var blog models.Blog
	_ = json.NewDecoder(r.Body).Decode(&blog)

	res := database.UploadBlog(blog)
	if (res.Result == "") {
		http.Error(w, res.Error, http.StatusForbidden)
	} else {
		json.NewEncoder(w).Encode(res.Result)
	}
}
package controllers

import (
	"encoding/json"
	"net/http"

	"server/database"

	"github.com/gorilla/mux"
)

type request struct {
    Comment string
}

// Add a comment to a blog
func CreateComment(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var comment request

	_ = json.NewDecoder(r.Body).Decode(&comment)
	database.UploadComment(params["id"], comment.Comment)
}
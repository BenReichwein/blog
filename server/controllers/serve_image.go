package controllers

import (
	"net/http"
	"os"
	"server/helpers"
	"time"

	"github.com/gorilla/mux"
)

// Get all blogs
func ServeImage(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	path := helpers.RootDir() + params["name"]
	//TODO error
	file, _ := os.Open(path)
	http.ServeContent(w, r, "image", time.Now(), file)
}
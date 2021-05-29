package controllers

import (
	"fmt"
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
	file, err := os.Open(path)
	if (err != nil) {
		http.Error(w, err.Error(), http.StatusBadRequest)
		fmt.Println(err)
	}
	http.ServeContent(w, r, "image", time.Now(), file)
}
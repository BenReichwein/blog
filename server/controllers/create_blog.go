package controllers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"server/database"
	"server/models"
)

// Create blog
func CreateBlog(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(32 << 20) // limit your max input length
	file, header, err := r.FormFile("file")
	if err != nil {
		panic(err)
	}

	defer file.Close()

	// Reads the file and returns byte slice
	data, err := ioutil.ReadAll(file)
	if err != nil {
		log.Fatal(err)
	}
	// Putting form values into blog struct
	blog := models.Blog{
		Title: r.FormValue("title"),
		Topics: r.FormValue("topics"),
		Description: r.FormValue("description"),
		Blog: r.FormValue("blog"),
		Image: header.Filename,
	}

	res := database.UploadBlog(data, blog)
	if (res.Result == "") {
		http.Error(w, res.Error, http.StatusForbidden)
	} else {
		json.NewEncoder(w).Encode(res.Result)
	}
}
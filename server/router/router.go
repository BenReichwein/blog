package router

import (
	"server/controllers"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	// Routes
	router.HandleFunc("/api/user/login", controllers.LoginHandler).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/user/register", controllers.RegisterHandler).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/blog", controllers.CreateBlog).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/comment/{id}", controllers.CreateComment).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/blog/all", controllers.AllBlogs).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/user/gettoken", controllers.GetToken).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/post/{id}", controllers.GetPost).Methods("GET", "OPTIONS")
	return router
}


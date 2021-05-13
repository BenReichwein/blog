package database

import (
	"bytes"
	"context"
	"fmt"

	"io/ioutil"
	"server/constants"
	"server/models"

	"go.mongodb.org/mongo-driver/bson"
)

// Uploads blog to database
func GetBlogs() ([]models.Blog) {
	var blogs []models.Blog
	// find all the documents in the blog collection
	cursor, _ := Database.Find(context.Background(), constants.BLOG_COLL, bson.D{})
	cursor.All(context.Background(), &blogs)
	// loop through all the blog array
	for _, blog := range blogs {
		fmt.Println(blog.Image)
		//gridfs downloading the file to server
		var buf bytes.Buffer
		dStream, err := Database.Bucket.DownloadToStreamByName(blog.Image, &buf)
		if err != nil {
			fmt.Println(err)
		} else {
			fmt.Println(dStream)
			ioutil.WriteFile(blog.Image, buf.Bytes(), 0600)
		}
	}

	return blogs
}
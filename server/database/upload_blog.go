package database

import (
	"context"
	"log"
	"server/models"
)

// Uploads blog to database
func UploadBlog(data []byte, blog models.Blog) (models.ResponseResult) {
	var res models.ResponseResult

	// Uploading the file name
	uploadStream, err := Bucket.OpenUploadStream(
		blog.Image,
	)
	if err != nil {
		log.Println(err)
		res.Error = "No Header given"
	}
	// Closing upload stream after function is complete
	defer uploadStream.Close()

	// Writes the file to the database
	fileSize, err := uploadStream.Write(data)
	if err != nil {
		log.Println(err)
		res.Error = "Can't get upload stream"
	}

	log.Printf("Write file to DB was successful. File size: %d M\n", fileSize)
	// Inserting blog
	_, err = Collection.InsertOne(context.TODO(), blog)
	if err != nil {
		res.Error = "Error While Uploading Blog, Try Again"
		return res
	} else {
		res.Result = "Upload Successful"
		return res
	}
}
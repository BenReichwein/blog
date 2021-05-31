package database

import (
	"context"
	"server/constants"
	"server/models"
)

// Uploads blog to database
func UploadBlog(blog models.Blog) (models.ResponseResult) {
	var res models.ResponseResult
	// Inserting blog
	_, err := Database.InsertOne(context.TODO(), constants.BLOG_COLL, blog)
	if err != nil {
		res.Error = "Error While Uploading Blog, Try Again"
		return res
	} else {
		res.Result = "Upload Successful"
		return res
	}
}
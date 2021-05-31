package database

import (
	"context"

	"server/constants"
	"server/models"

	"go.mongodb.org/mongo-driver/bson"
)

// Find blogs in database
func FindBlogs() ([]models.Blog) {
	var blogs []models.Blog
	// find all the documents in the blog collection
	cursor, _ := Database.Find(context.Background(), constants.BLOG_COLL, bson.D{})
	cursor.All(context.Background(), &blogs)

	return blogs
}
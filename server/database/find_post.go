package database

import (
	"context"
	"fmt"

	"server/constants"
	"server/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Find blog post in database
func FindPost(id string) (models.Blog) {
	var post models.Blog
	// check if the id is valid
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil{
		fmt.Println("Invalid id")
	}
	// find the blog documents in the collection
	e := Database.FindOne(context.TODO(), constants.BLOG_COLL, bson.M{"_id": objectId}).Decode(&post)
	if err != nil {
		fmt.Println(e)
	}

	return post
}
package database

import (
	"context"
	"fmt"

	"server/constants"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Uploads comments for blog to database
func UploadComment(id string, comment string) {
	objectId, e := primitive.ObjectIDFromHex(id)
	if e != nil {
		fmt.Println(e)
	}

	Database.Database.Collection(constants.BLOG_COLL).
		UpdateOne(context.Background(), bson.M{"_id": objectId}, bson.M{"$push": bson.M{"comments": comment}})
}
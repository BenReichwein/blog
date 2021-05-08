package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/gridfs"
)

// collection object/instance - used across database package
var Collection *mongo.Collection
var Bucket *gridfs.Bucket

// connect to mongodb
func Connect() {
	connectionString := os.Getenv("DB_URI")
	dbName := os.Getenv("DB_NAME")
	collName := os.Getenv("DB_COLLECTION_NAME")

	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}
	// Init grid fs
	var e error
	Bucket, e = gridfs.NewBucket(
        client.Database(dbName),
    )
	if e != nil {
		log.Fatal(e)
	}

	fmt.Println("Connected to MongoDB!")

	Collection = client.Database(dbName).Collection(collName)

	fmt.Println("Collection instance created!")
}

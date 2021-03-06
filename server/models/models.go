package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Username  string             `json:"username"`
	Password  string             `json:"password"`
	Token     string             `json:"token"`
	Image     string             `json:"image"`
}

type Blog struct {
	ID        		primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Title  			string             `json:"title"`
	Topics  		string             `json:"topics"`
	Description     string             `json:"description"`
	Blog     		string             `json:"blog"`
	Image     		string             `json:"image"`
	Comments        []string           `json:"comments"`
}

type ResponseResult struct {
	Error  string `json:"error"`
	Result string `json:"result"`
}
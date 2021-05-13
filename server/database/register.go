package database

import (
	"context"
	"server/constants"
	"server/models"

	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

// Registers user to the database
func Register(user models.User) (models.ResponseResult) {
	var result models.User
	var res models.ResponseResult
	err := Database.FindOne(context.TODO(), constants.USER_COLL, bson.M{"username": user.Username}).Decode(&result)
	if err != nil {
		if err.Error() == "mongo: no documents in result" {
			hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 5)

			if err != nil {
				res.Error = "Error While Hashing Password, Try Again"
				return res
			} else {
				user.Password = string(hash)
			}
			_, err = Database.InsertOne(context.TODO(), constants.USER_COLL, user)
			if err != nil {
				res.Error = "Error While Creating User, Try Again"
				return res
			} else {
				res.Result = "Registration Successful"
				return res
			}
		}

		res.Error = err.Error()
		return res
	}
	res.Error = "User Already Exists"
	return res
}
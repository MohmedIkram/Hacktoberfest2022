/*
Simple API with gin
Before running this program :
1. open terminal and type : go mod init Go
2. go get . or go get github.com/gin-gonic/gin
3. go run simple-api.go
*/
package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func main()  {
	router := gin.Default()
	router.GET("/albums", getAlbums)
	router.GET("/albums/:id", getAlbumByID)
	router.POST("/albums", postAlbums)

	router.Run("localhost:8080")
}

// album represents data about a record album.
type album struct {
	ID string 	`json:"id"`
	Title string `json:"title"`
	Artist string `json:"artist"`
	Price float64 `json":"price"`
}

// albums slice to seed record album data.
var albums =  []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
    {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

// getAlbums responds with th elist of all albums as JSON
func getAlbums(c *gin.Context)  {
	c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body
func postAlbums(c *gin.Context)  {
	var newAlbum album

	// call BindJSON to bind the received JSON to newAlbum
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// Add the new album to slice
	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response
func getAlbumByID(c *gin.Context)  {
	id := c.Param("id")

	// Loop over the list of albums, looking for
	// an album whose ID value matches the parameter.
	for _, v := range albums {
		if v.ID == id {
			c.IndentedJSON(http.StatusOK, v)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
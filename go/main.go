package main

import (
	v1 "big-srceen/v1"
	v2 "big-srceen/v2"
	v3 "big-srceen/v3"
	"github.com/gin-gonic/gin"
)

// Middleware function to enable CORS
func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
func main() {
	//go mediaServer.ServerMain() //媒体服务
	//go ffmpegTranspond.TranspondMain() //调用命令行工具
	//go ffmpegTranspond.TransServerMain() //转发服务
	router := gin.Default()

	router.Use(corsMiddleware())
	v1.ApiV1(router)

	v2.ApiV2(router)

	v3.ApiV3(router)

	router.Run("0.0.0.0:8080")
}

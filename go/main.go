package main

import (
	"big-srceen/dataTemplateObeject"
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
	router := gin.Default()

	router.Use(corsMiddleware())

	router.GET("/api/leftPageData", func(c *gin.Context) {
		// 获取查询参数中的日期参数
		date := c.DefaultQuery("date", "") // 如果没有传递日期参数，就使用空字符串作为默认值

		// 使用获取到的日期参数生成左侧界面数据
		leftPageData := dataTemplateObeject.GenerateLeftPageData(date)

		c.JSON(200, leftPageData)
	})

	router.GET("/api/centerPageData", func(c *gin.Context) {
		centerPageData := dataTemplateObeject.GenerateCenterPageData()
		c.JSON(200, centerPageData)
	})

	router.GET("/api/rightPageData", func(c *gin.Context) {
		rightPageData := dataTemplateObeject.GenerateRightPageData()
		c.JSON(200, rightPageData)
	})

	router.Run("0.0.0.0:8080")
}

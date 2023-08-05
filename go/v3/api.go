package v3

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

func ApiV3(router *gin.Engine) {
	router.GET("/api/v3/leftPageData", func(c *gin.Context) {
		// 读取JSON文件
		file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v3/dto/leftPageData.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

	router.GET("/api/v3/centerPageData", func(c *gin.Context) {
		// 读取JSON文件
		file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v3/dto/centerPageData.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

	router.GET("/api/v3/rightPageData", func(c *gin.Context) {
		// 读取JSON文件
		file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v3/dto/rightPageData.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

}

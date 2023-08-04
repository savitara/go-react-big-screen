package v2

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

func ApiV2(router *gin.Engine) {

	router.GET("/api/homePageData", func(c *gin.Context) {
		// 读取JSON文件
		file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/HomePage.json")
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

	router.GET("/api/secondPageData", func(c *gin.Context) {
		//paramValue := c.Query("params")
		//fmt.Println(paramValue)
		//// 读取JSON文件
		//file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage.json")
		//if err != nil {
		//	c.JSON(500, gin.H{"error": "无法读取文件"})
		//	return
		//}
		//
		//// 解析JSON文件
		//var jsonData map[string]interface{}
		//if err := json.Unmarshal(file, &jsonData); err != nil {
		//	c.JSON(500, gin.H{"error": "无法解析JSON"})
		//	return
		//}

		// 返回JSON响应
		c.JSON(200, gin.H{"code": 200, "message": "success"})
	})

	router.GET("/api/secondPageData/query", func(c *gin.Context) {
		paramValue := c.Query("params")
		var file []byte
		switch paramValue {
		case "1":
			// 读取JSON文件
			readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage1.json")
			if err != nil {
				c.JSON(500, gin.H{"error": "无法读取文件"})
				return
			}
			file = readFile
		case "2":
			// 读取JSON文件
			readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage2.json")
			if err != nil {
				c.JSON(500, gin.H{"error": "无法读取文件"})
				return
			}
			file = readFile
		case "3":
			// 读取JSON文件
			readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage3.json")
			if err != nil {
				c.JSON(500, gin.H{"error": "无法读取文件"})
				return
			}
			file = readFile
		case "4":
			// 读取JSON文件
			readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage4.json")
			if err != nil {
				c.JSON(500, gin.H{"error": "无法读取文件"})
				return
			}
			file = readFile
		}

		//fmt.Println(paramValue)
		//// 读取JSON文件
		//file, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage.json")
		//if err != nil {
		//	c.JSON(500, gin.H{"error": "无法读取文件"})
		//	return
		//}

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

	router.GET("/api/secondPageData/1", func(c *gin.Context) {
		var file []byte

		// 读取JSON文件
		readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage1.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}
		file = readFile

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})
	router.GET("/api/secondPageData/2", func(c *gin.Context) {
		var file []byte

		// 读取JSON文件
		readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage2.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}
		file = readFile

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

	router.GET("/api/secondPageData/3", func(c *gin.Context) {
		var file []byte

		// 读取JSON文件
		readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage3.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}
		file = readFile

		// 解析JSON文件
		var jsonData map[string]interface{}
		if err := json.Unmarshal(file, &jsonData); err != nil {
			c.JSON(500, gin.H{"error": "无法解析JSON"})
			return
		}

		// 返回JSON响应
		c.JSON(200, jsonData)
	})

	router.GET("/api/secondPageData/4", func(c *gin.Context) {
		var file []byte

		// 读取JSON文件
		readFile, err := ioutil.ReadFile("/home/lin/YG_CODE/VSCode/go-react-big-screen/go/v2/DTO/SecondPage4.json")
		if err != nil {
			c.JSON(500, gin.H{"error": "无法读取文件"})
			return
		}
		file = readFile

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

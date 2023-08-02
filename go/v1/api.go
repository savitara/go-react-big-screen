package v1

import (
	"big-srceen/v1/dataTemplateObeject"
	"github.com/gin-gonic/gin"
)

func ApiV1(router *gin.Engine) {

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
}

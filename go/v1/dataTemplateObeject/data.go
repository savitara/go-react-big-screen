package dataTemplateObeject

import (
	"math/rand"
	"time"
)

type LeftPageData struct {
	AccessFrequency int `json:"accessFrequency"`
	PeakFlow        int `json:"peakFlow"`

	TrafficSitua struct {
		TimeList                         []string  `json:"timeList"`
		UtilizationRate                  []float64 `json:"utilizationRate"`
		HistoricalAverageUtilizationRate []float64 `json:"historicalAverageUtilizationRate"`
	} `json:"trafficSitua"`

	UserSitua struct {
		Header []string   `json:"header"`
		Data   [][]string `json:"data"`
	} `json:"userSitua"`
}

type RightPageData struct {
	BrowseCategories struct {
		Data      []float64 `json:"data"`
		Indicator []struct {
			Name string `json:"name"`
			Max  int    `json:"max"`
		} `json:"indicator"`
	} `json:"browseCategories"`

	UserIdentityCategory struct {
		Data []struct {
			Name  string `json:"name"`
			Used  int    `json:"used"`
			Total int    `json:"total"`
		} `json:"data"`
	} `json:"userIdentityCategory"`

	Offline struct {
		Feedback []struct {
			Title  string  `json:"title"`
			Number float64 `json:"number"`
		} `json:"feedback"`
		OfflinePortalData struct {
			XData   []string `json:"xData"`
			BarData []int    `json:"barData"`
		} `json:"offlinePortalData"`
	} `json:"offline"`

	PersonnelAndEquipmentStatusData struct {
		PersonnelStatus struct {
			OnDuty     []int  `json:"onDuty"`
			OnDutyText string `json:"onDutyText"`
			FFDuty     []int  `json:"ffDuty"`
			FFDutyText string `json:"ffDutyText"`
		} `json:"personnelStatus"`

		EquipmentStatus struct {
			Online      []int  `json:"online"`
			OnlineText  string `json:"onlineText"`
			Offline     []int  `json:"offline"`
			OfflineText string `json:"offlineText"`
		} `json:"equipmentStatus"`
	} `json:"personnelAndEquipmentStatusData"`

	RoadParkingData struct {
		DataCategory    []string `json:"dataCategory"`
		BerthOccupation []int    `json:"berthOccupation"`
		BerthVacancy    []int    `json:"berthVacancy"`
	} `json:"roadParkingData"`
}

type CenterPageData struct {
	DetailsList []struct {
		Title  string `json:"title"`
		Number int    `json:"number"`
		Unit   string `json:"unit"`
	} `json:"detailsList"`

	BerthOperation struct {
		Feedback []struct {
			Title  string  `json:"title"`
			Number float64 `json:"number"`
		} `json:"feedback"`
		BerthOperationPortalData struct {
			XData   []string `json:"xData"`
			BarData []int    `json:"barData"`
		} `json:"berthOperationPortalData"`
	} `json:"berthOperation"`

	MapData struct {
		MoveLines []struct {
			FromName string      `json:"fromName"`
			ToName   string      `json:"toName"`
			Coords   [][]float64 `json:"coords"`
		} `json:"moveLines"`
	} `json:"mapData"`

	ParkingRecord struct {
		TimeList                         []string  `json:"timeList"`
		UtilizationRate                  []float64 `json:"utilizationRate"`
		HistoricalAverageUtilizationRate []float64 `json:"historicalAverageUtilizationRate"`
	} `json:"parkingRecord"`

	RoofDataList []struct {
		Title  string `json:"title"`
		Number int    `json:"number"`
		Unit   string `json:"unit"`
	} `json:"roofDataList"`

	ParkingHabitsData struct {
		Title string `json:"title"`
		Data  []struct {
			Value int    `json:"value"`
			Name  string `json:"name"`
		} `json:"data"`
	} `json:"parkingHabitsData"`

	IdentityCategory struct {
		Data []struct {
			Value int    `json:"value"`
			Name  string `json:"name"`
		} `json:"data"`
	} `json:"identityCategory"`

	RankingIdentityCategory struct {
		Data []struct {
			Value float64 `json:"value"`
			Name  string  `json:"name"`
		} `json:"data"`
	} `json:"rankingIdentityCategory"`

	MapChartData struct {
		AMap struct {
			MarkerPositions []struct {
				Longitude float64 `json:"longitude"`
				Latitude  float64 `json:"latitude"`
			} `json:"markerPositions"`
			CenterPosition struct {
				Longitude float64 `json:"longitude"`
				Latitude  float64 `json:"latitude"`
			} `json:"centerPosition"`
		} `json:"aMap"`

		EChart struct {
			HeatMapMarkerPositions []struct {
				Value [3]float64 `json:"value"` // 代表标记点的位置信息，包含经度、纬度和数值
			} `json:"heatMapMarkerPositions"`
		} `json:"eChart"`
	} `json:"mapChartData"`
}

func getCurrentDate() string {
	// 获取当前日期
	currentDate := time.Now().Format("2006-01-02")
	return currentDate
}

// 生成左侧界面数据
func GenerateLeftPageData(date string) LeftPageData {
	// 如果date参数为空字符串，使用当前日期作为默认日期
	if date == "" {
		// 获取当前日期的逻辑
		//currentDate := getCurrentDate() // 你需要实现获取当前日期的函数
		// 使用当前日期来生成左侧界面数据
		leftPageData := LeftPageData{
			AccessFrequency: 1500,
			PeakFlow:        300,
			TrafficSitua: struct {
				TimeList                         []string  `json:"timeList"`
				UtilizationRate                  []float64 `json:"utilizationRate"`
				HistoricalAverageUtilizationRate []float64 `json:"historicalAverageUtilizationRate"`
			}{
				TimeList:                         []string{"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"},
				UtilizationRate:                  generateRandomFloatSlice(24, 0, 100),
				HistoricalAverageUtilizationRate: generateRandomFloatSlice(24, 0, 100),
			},
			UserSitua: struct {
				Header []string   `json:"header"`
				Data   [][]string `json:"data"`
			}{
				Header: []string{"类型", "数量(辆)"},
				Data: [][]string{
					{"绑定车", "1024"},
					{"临时车", "25"},
					{"包月车", "36"},
					{"白名单车", "160"},
					{"绿牌车", "60"},
					{"小E", "50"},
				},
			},
		}

		return leftPageData
	} else {

		// 返回左侧界面数据
		// ...
		leftPageData := LeftPageData{
			AccessFrequency: 1500,
			PeakFlow:        300,
			TrafficSitua: struct {
				TimeList                         []string  `json:"timeList"`
				UtilizationRate                  []float64 `json:"utilizationRate"`
				HistoricalAverageUtilizationRate []float64 `json:"historicalAverageUtilizationRate"`
			}{
				TimeList:                         []string{"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"},
				UtilizationRate:                  generateRandomFloatSlice(24, 0, 100),
				HistoricalAverageUtilizationRate: generateRandomFloatSlice(24, 0, 100),
			},
			UserSitua: struct {
				Header []string   `json:"header"`
				Data   [][]string `json:"data"`
			}{
				Header: []string{"类型", "数量(辆)"},
				Data: [][]string{
					{"绑定车", "1024"},
					{"临时车", "25"},
					{"包月车", "36"},
					{"白名单车", "160"},
					{"绿牌车", "60"},
					{"小E", "50"},
				},
			},
		}

		return leftPageData
	}

}

// 生成中间界面数据
func GenerateCenterPageData() CenterPageData {
	centerPageData := CenterPageData{
		BerthOperation: struct {
			Feedback []struct {
				Title  string  `json:"title"`
				Number float64 `json:"number"`
			} `json:"feedback"`
			BerthOperationPortalData struct {
				XData   []string `json:"xData"`
				BarData []int    `json:"barData"`
			} `json:"berthOperationPortalData"`
		}{
			Feedback: []struct {
				Title  string  `json:"title"`
				Number float64 `json:"number"`
			}{
				{Title: "周转率", Number: 95.34},
				// Add more feedback data here if needed
			},
			BerthOperationPortalData: struct {
				XData   []string `json:"xData"`
				BarData []int    `json:"barData"`
			}{
				XData:   []string{"2/21", "2/22", "2/23"},
				BarData: []int{3, 4, 3},
			},
		},
		MapData: struct {
			MoveLines []struct {
				FromName string      `json:"fromName"`
				ToName   string      `json:"toName"`
				Coords   [][]float64 `json:"coords"`
			} `json:"moveLines"`
		}{},
		ParkingRecord: struct {
			TimeList                         []string  `json:"timeList"`
			UtilizationRate                  []float64 `json:"utilizationRate"`
			HistoricalAverageUtilizationRate []float64 `json:"historicalAverageUtilizationRate"`
		}{
			TimeList:                         []string{"7-01", "7-02", "7-03", "7-04", "7-05", "7-06", "7-07", "7-08", "7-09", "7-10", "7-11", "7-12", "7-13", "7-14", "7-15", "7-16", "7-17", "7-18", "7-19", "7-20", "7-21", "7-22", "7-23", "7-24", "7-25", "7-26", "7-27", "7-28", "7-29", "7-30", "7-31"},
			UtilizationRate:                  generateRandomFloatSlice(31, 0, 3000),
			HistoricalAverageUtilizationRate: generateRandomFloatSlice(31, 0, 3000),
		},
		RoofDataList: []struct {
			Title  string `json:"title"`
			Number int    `json:"number"`
			Unit   string `json:"unit"`
		}{
			{
				Title:  "订单总金额",
				Number: 2600000,
				Unit:   "元/月",
			},
			{
				Title:  "停车记录总量",
				Number: 3130,
				Unit:   "条/月",
			},
			{
				Title:  "用户缴费率/月",
				Number: 85,
				Unit:   "%",
			},
			{
				Title:  "月订单总额",
				Number: 21016,
				Unit:   "元",
			},
			{
				Title:  "今日订单数",
				Number: 85,
				Unit:   "条",
			},
			{
				Title:  "今日订单额",
				Number: 2116,
				Unit:   "元",
			},
			{
				Title:  "充电桩数量",
				Number: 185,
				Unit:   "个",
			},
			{
				Title:  "停车场数量",
				Number: 21106,
				Unit:   "个",
			},
			{
				Title:  "立体车库数量",
				Number: 306,
				Unit:   "个",
			},
			{
				Title:  "车库泊位数量",
				Number: 48306,
				Unit:   "个",
			},
		},
		ParkingHabitsData: struct {
			Title string `json:"title"`
			Data  []struct {
				Value int    `json:"value"`
				Name  string `json:"name"`
			} `json:"data"`
		}{
			Title: "停车时长分布",
			Data: []struct {
				Value int    `json:"value"`
				Name  string `json:"name"`
			}{
				{Value: 335, Name: "1到60分钟"},
				{Value: 234, Name: "1到12小时"},
				{Value: 310, Name: "12到24小时"},
				{Value: 160, Name: "24小时以上"},
				{Value: 100, Name: "48小时以上"},
			},
		},
		IdentityCategory: struct {
			Data []struct {
				Value int    `json:"value"`
				Name  string `json:"name"`
			} `json:"data"`
		}{
			Data: []struct {
				Value int    `json:"value"`
				Name  string `json:"name"`
			}{
				{Value: 90, Name: "A103河东路段"},
				{Value: 58, Name: "B101河北路段"},
				{Value: 53, Name: "B102江东路段"},
				{Value: 70, Name: "A104河西路段"},
				{Value: 65, Name: "A105河南路段"},
			},
		},
		RankingIdentityCategory: struct {
			Data []struct {
				Value float64 `json:"value"`
				Name  string  `json:"name"`
			} `json:"data"`
		}{
			Data: []struct {
				Value float64 `json:"value"`
				Name  string  `json:"name"`
			}{
				{Value: 9.9, Name: "A103河东路段"},
				{Value: 7.9, Name: "A104河西路段"},
				{Value: 5.9, Name: "A105河南路段"},
				{Value: 5.1, Name: "B101河北路段"},
				{Value: 4.8, Name: "B102江东路段"},
			},
		},

		MapChartData: struct {
			AMap struct {
				MarkerPositions []struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				} `json:"markerPositions"`
				CenterPosition struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				} `json:"centerPosition"`
			} `json:"aMap"`

			EChart struct {
				HeatMapMarkerPositions []struct {
					Value [3]float64 `json:"value"` // 代表标记点的位置信息，包含经度、纬度和数值
				} `json:"heatMapMarkerPositions"`
			} `json:"eChart"`
		}{
			AMap: struct {
				MarkerPositions []struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				} `json:"markerPositions"`
				CenterPosition struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				} `json:"centerPosition"`
			}{
				MarkerPositions: []struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				}{
					{Longitude: 107.38, Latitude: 23.19},
					{Longitude: 111, Latitude: 37.86},
					{Longitude: 121, Latitude: 36.86},
					//{Longitude: 116.397428, Latitude: 38.90923},

				},
				CenterPosition: struct {
					Longitude float64 `json:"longitude"`
					Latitude  float64 `json:"latitude"`
				}{
					Longitude: 117.397428,
					Latitude:  39.90923,
				},
			},
			EChart: struct {
				HeatMapMarkerPositions []struct {
					Value [3]float64 `json:"value"` // 代表标记点的位置信息，包含经度、纬度和数值
				} `json:"heatMapMarkerPositions"`
			}{
				HeatMapMarkerPositions: []struct {
					Value [3]float64 `json:"value"` // 代表标记点的位置信息，包含经度、纬度和数值
				}{
					{Value: [3]float64{107.38, 23.19, 120}},
					{Value: [3]float64{111, 37.86, 1140}},
					{Value: [3]float64{121, 36.86, 114}},
					//{Value: [3]float64{116.37, 23.19, 120}},
				},
			},
		},
	}
	return centerPageData
}

// 生成右侧界面数据
func GenerateRightPageData() RightPageData {
	rightPageData := RightPageData{
		BrowseCategories: struct {
			Data      []float64 `json:"data"`
			Indicator []struct {
				Name string `json:"name"`
				Max  int    `json:"max"`
			} `json:"indicator"`
		}{
			Data: []float64{782, 621.2, 322.1, 525.3, 265, 224},
			Indicator: []struct {
				Name string `json:"name"`
				Max  int    `json:"max"`
			}{
				{Name: "食物", Max: 1000},
				{Name: "娱乐", Max: 1000},
				{Name: "运动", Max: 1000},
				{Name: "家居", Max: 1000},
				{Name: "机械", Max: 1000},
				{Name: "学习", Max: 1000},
			},
		},
		UserIdentityCategory: struct {
			Data []struct {
				Name  string `json:"name"`
				Used  int    `json:"used"`
				Total int    `json:"total"`
			} `json:"data"`
		}{
			Data: []struct {
				Name  string `json:"name"`
				Used  int    `json:"used"`
				Total int    `json:"total"`
			}{
				{Name: "白杨路", Used: 57, Total: 100},
				{Name: "河东大道", Used: 167, Total: 200},
				{Name: "解放路", Used: 123, Total: 150},
				{Name: "向阳路", Used: 55, Total: 80},
				{Name: "乐中路", Used: 198, Total: 300},
			},
		},
		Offline: struct {
			Feedback []struct {
				Title  string  `json:"title"`
				Number float64 `json:"number"`
			} `json:"feedback"`
			OfflinePortalData struct {
				XData   []string `json:"xData"`
				BarData []int    `json:"barData"`
			} `json:"offlinePortalData"`
		}{
			Feedback: []struct {
				Title  string  `json:"title"`
				Number float64 `json:"number"`
			}{
				{Title: "支付用户转化率", Number: 95.34},
			},
			OfflinePortalData: struct {
				XData   []string `json:"xData"`
				BarData []int    `json:"barData"`
			}{
				XData:   []string{"用户注册数", "30日内用户活跃数"},
				BarData: []int{103, 4096},
			},
		},
		PersonnelAndEquipmentStatusData: struct {
			PersonnelStatus struct {
				OnDuty     []int  `json:"onDuty"`
				OnDutyText string `json:"onDutyText"`
				FFDuty     []int  `json:"ffDuty"`
				FFDutyText string `json:"ffDutyText"`
			} `json:"personnelStatus"`

			EquipmentStatus struct {
				Online      []int  `json:"online"`
				OnlineText  string `json:"onlineText"`
				Offline     []int  `json:"offline"`
				OfflineText string `json:"offlineText"`
			} `json:"equipmentStatus"`
		}{
			PersonnelStatus: struct {
				OnDuty     []int  `json:"onDuty"`
				OnDutyText string `json:"onDutyText"`
				FFDuty     []int  `json:"ffDuty"`
				FFDutyText string `json:"ffDutyText"`
			}{
				OnDuty:     []int{320},
				OnDutyText: "在岗人数",
				FFDuty:     []int{100},
				FFDutyText: "离岗人数",
			},
			EquipmentStatus: struct {
				Online      []int  `json:"online"`
				OnlineText  string `json:"onlineText"`
				Offline     []int  `json:"offline"`
				OfflineText string `json:"offlineText"`
			}{
				Online:      []int{1200},
				OnlineText:  "在线设备数",
				Offline:     []int{30},
				OfflineText: "离线设备数",
			},
		},
		RoadParkingData: struct {
			DataCategory    []string `json:"dataCategory"`
			BerthOccupation []int    `json:"berthOccupation"`
			BerthVacancy    []int    `json:"berthVacancy"`
		}{
			DataCategory:    []string{"横河路", "中山路", "城东大道", "泉飞翼巷", "日月路", "程东路", "城都路"},
			BerthOccupation: []int{320, 302, 301, 334, 390, 330, 320},
			BerthVacancy:    []int{120, 132, 101, 134, 90, 230, 210},
		},
	}
	return rightPageData
}

// 生成随机浮点数切片
func generateRandomFloatSlice(length int, min, max float64) []float64 {
	slice := make([]float64, length)
	for i := 0; i < length; i++ {
		slice[i] = min + rand.Float64()*(max-min)
	}
	return slice
}

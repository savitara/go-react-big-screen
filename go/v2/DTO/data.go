package DTO

import (
	"math/rand"
	"time"
)

type TopData struct {
}

type Column struct {
	Title     string `json:"title"`
	DataIndex string `json:"dataIndex"`
	Key       string `json:"key"`
}

type Datum struct {
	Key     string   `json:"key"`
	Name    string   `json:"name"`
	Age     int      `json:"age"`
	Address string   `json:"address"`
	Tags    []string `json:"tags"`
	City    string   `json:"city"`
}

type TableData struct {
	Columns []Column `json:"columns"`
	Data    []Datum  `json:"data"`
	Title   string   `json:"title"`
}

type BoxData struct {
	Title     string    `json:"title"`
	TableData TableData `json:"tableData"`
}

type HomePageData struct {
	Data struct {
		TopData     TopData   `json:"topData"`
		BoxDataList []BoxData `json:"boxDataList"`
	} `json:"data"`
}
type SecondPageData struct {
	Data struct {
		TopData     TopData   `json:"topData"`
		BoxDataList []BoxData `json:"boxDataList"`
	} `json:"data"`
}

// 生成界面数据
func GenerateHomePageData(date string) HomePageData {
	rand.Seed(time.Now().UnixNano())

	// Sample data for TableData
	//tableData := TableData{
	//	Columns: []Column{
	//		{
	//			Title:     "城市",
	//			DataIndex: "name",
	//			Key:       "name",
	//		},
	//		{
	//			Title:     "停车场数量",
	//			DataIndex: "age",
	//			Key:       "age",
	//		},
	//		{
	//			Title:     "总车位数",
	//			DataIndex: "address",
	//			Key:       "address",
	//		},
	//	},
	//	Data: []Datum{
	//		{
	//			Key:     "1",
	//			Name:    "John Brown",
	//			Age:     32,
	//			Address: "New York No. 1 Lake Park",
	//			Tags:    []string{"nice", "developer"},
	//		},
	//		{
	//			Key:     "2",
	//			Name:    "Jim Green",
	//			Age:     42,
	//			Address: "London No. 1 Lake Park",
	//			Tags:    []string{"loser"},
	//		},
	//		{
	//			Key:     "3",
	//			Name:    "Joe Black",
	//			Age:     32,
	//			Address: "Sydney No. 1 Lake Park",
	//			Tags:    []string{"cool", "teacher"},
	//		},
	//	},
	//	Title: "全国停车场分布",
	//}

	// Sample data for BoxDataList
	boxDataList := []BoxData{
		{
			Title: "封闭停车场",
			TableData: TableData{
				Columns: []Column{
					{
						Title:     "城市",
						DataIndex: "city",
						Key:       "city",
					},
					{
						Title:     "停车场数量",
						DataIndex: "price",
						Key:       "price",
					}, {
						Title:     "总车位数量",
						DataIndex: "price",
						Key:       "price",
					},
				},
				Data: []Datum{
					{
						Key:     "1",
						City:    "City A",
						Age:     10,
						Address: "Location A",
						Tags:    []string{"tag1", "tag2"},
					},
					{
						Key:     "2",
						City:    "City B",
						Age:     20,
						Address: "Location B",
						Tags:    []string{"tag3"},
					},
				},
				Title: "全国停车分布",
			},
		},

		{
			Title: "路边停车场",
			TableData: TableData{
				Columns: []Column{
					{
						Title:     "城市",
						DataIndex: "name",
						Key:       "name",
					},
					{
						Title:     "价格",
						DataIndex: "price",
						Key:       "price",
					},
				},
				Data: []Datum{
					{
						Key:     "1",
						Name:    "City A",
						Age:     10,
						Address: "Location A",
						Tags:    []string{"tag1", "tag2"},
					},
					{
						Key:     "2",
						Name:    "City B",
						Age:     20,
						Address: "Location B",
						Tags:    []string{"tag3"},
					},
				},
				Title: "全国路边停车分布",
			},
		},
		{
			Title: "立体车库",
			TableData: TableData{
				Columns: []Column{
					{
						Title:     "城市",
						DataIndex: "name",
						Key:       "name",
					},
					{
						Title:     "价格",
						DataIndex: "price",
						Key:       "price",
					},
				},
				Data: []Datum{
					{
						Key:     "1",
						Name:    "City A",
						Age:     10,
						Address: "Location A",
						Tags:    []string{"tag1", "tag2"},
					},
					{
						Key:     "2",
						Name:    "City B",
						Age:     20,
						Address: "Location B",
						Tags:    []string{"tag3"},
					},
				},
				Title: "全国立体车库分布",
			},
		},
		{
			Title: "充电桩",
			TableData: TableData{
				Columns: []Column{
					{
						Title:     "城市",
						DataIndex: "name",
						Key:       "name",
					},
					{
						Title:     "价格",
						DataIndex: "price",
						Key:       "price",
					},
				},
				Data: []Datum{
					{
						Key:     "1",
						Name:    "City A",
						Age:     10,
						Address: "Location A",
						Tags:    []string{"tag1", "tag2"},
					},
					{
						Key:     "2",
						Name:    "City B",
						Age:     20,
						Address: "Location B",
						Tags:    []string{"tag3"},
					},
				},
				Title: "全国充电桩分布",
			},
		},
	}

	// Sample data for TopData
	topData := TopData{
		// Add top data fields here as needed
	}

	// Generate HomePageData with sample data
	homePageData := HomePageData{
		Data: struct {
			TopData     TopData   `json:"topData"`
			BoxDataList []BoxData `json:"boxDataList"`
		}{
			TopData:     topData,
			BoxDataList: boxDataList,
		},
	}

	return homePageData
}

// 生成界面数据
func GenerateSecondPageData() SecondPageData {

	return SecondPageData{}
}

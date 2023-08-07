package ffmpegTranspond

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"time"
)

type Response struct {
	Status int    `json:"status"`
	Data   string `json:"data"`
}

func TranspondMain() {
	url := "http://localhost:8090/control/get?room=movie"

	for {
		resp, err := http.Get(url)
		if err != nil {
			log.Println(err)
			time.Sleep(2 * time.Second)
			continue
		}
		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Println(err)
			time.Sleep(2 * time.Second)
			continue
		}

		var response Response
		err = json.Unmarshal(body, &response)
		if err != nil {
			log.Println(err)
			time.Sleep(2 * time.Second)
			continue
		}

		key := response.Data
		outputURL := fmt.Sprintf("rtmp://localhost:1935/live/%s", key)
		inputFile := "rtsp://192.168.10.189/live/mainstream_0"
		//完整命令：ffmpeg -rtsp_transport tcp -i "$input_file" -vcodec h264 -acodec aac -f flv "$output_url"
		cmd := exec.Command("ffmpeg", "-rtsp_transport", "tcp", "-i", inputFile, "-vcodec", "h264", "-acodec", "aac", "-f", "flv", outputURL)
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr

		err = cmd.Run()
		if err != nil {
			log.Fatal(err)
		}

		break
	}
}

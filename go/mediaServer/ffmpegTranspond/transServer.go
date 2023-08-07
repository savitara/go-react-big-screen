package ffmpegTranspond

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	ffmpeg "github.com/u2takey/ffmpeg-go"
)

func TransServerMain() {
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

		err = transcode(inputFile, outputURL)
		if err != nil {
			log.Fatal(err)
		}

		break
	}
}

func transcode(inputFile string, outputURL string) error {
	cmd := ffmpeg.Input(inputFile).Output(outputURL, ffmpeg.KwArgs{"rtsp_transport": "tcp", "vcodec": "h264", "acodec": "aac", "f": "flv"}).
		OverWriteOutput().ErrorToStdOut()

	err := cmd.Run()
	return err
}

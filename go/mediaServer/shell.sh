input_file="rtsp://192.168.10.189/live/mainstream_0"
Key='1RffBKDHY8OJ3Lx3eIfw8UbeYmiJkfgYvhnM7PilIhBnyqJg'
output_url="rtmp://localhost:1935/live/$Key"
output_url_hls="http://localhost:7002/live/$Key"

output_url_flv="http://localhost:7001/live/$Key"

# 最终的命令，可以播放rtmp、flv、hls

ffmpeg -rtsp_transport tcp -i "$input_file" -vcodec h264 -acodec aac -f flv "$output_url"
#ffmpeg -rtsp_transport tcp -i "$input_file"   -f hls -hls_time 5 -hls_list_size 10 "$output_url_hls"
#ffmpeg -i "$input_file" -vcodec h264 -acodec aac -f flv "$output_url_flv"


#ffmpeg -rtsp_transport tcp -i "$input_file"  -f flv -r 25 -s 1920x1080 -an "$output_url"


#ffmpeg -i "$input_file" -c:v copy -an -f flv "$output_url"

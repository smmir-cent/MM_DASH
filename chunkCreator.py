import ffmpeg_streaming
from ffmpeg_streaming import Formats



if __name__ == '__main__':
    video = ffmpeg_streaming.input('The_Shawshank_Redemption.mp4')
    dash = video.dash(Formats.h264())
    dash.auto_generate_representations()
    dash.output('Front/Movies/1/The_Shawshank_Redemption_dash.mpd')

    video = ffmpeg_streaming.input('The_Godfather.mp4')
    dash = video.dash(Formats.h264())
    dash.auto_generate_representations()
    dash.output('Front/Movies/2/The_Godfather_dash.mpd')
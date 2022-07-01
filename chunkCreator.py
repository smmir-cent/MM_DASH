import ffmpeg_streaming
from ffmpeg_streaming import Formats

import os
print(os.environ['PATH'])

video = ffmpeg_streaming.input('Front/Movies/1/The_Shawshank_Redemption.mp4')
dash = video.dash(Formats.h264())
dash.auto_generate_representations()
dash.output('Front/Movies/1/The_Shawshank_Redemption_dash.mpd')

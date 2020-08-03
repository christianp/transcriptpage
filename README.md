# transcriptpage

`transcriptpage` is a tool which takes a video and a captions file, and creates a web page which displays the video alongside the transcript.

Each sentence in the transcript is displayed on a separate line, along with a timestamp; clicking on the timestamp jumps the video to that sentence.

## How to use it

`transcriptpage` is a Python 3 script. It has been tested with python 3.8.

At the moment, it only supports videos on Vimeo. Soon, it will support YouTube as well.

It requires a few Python packages, which can be installed with pip:

```python
pip install -r requirements.txt
```

To create a page, you need a captions file in .srt format and the address of the video. The command takes two arguments: the local path of the .srt file, and the address of the video.

```
./transcriptpage captions.srt https://vimeo.com/442721457
```

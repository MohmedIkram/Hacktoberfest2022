import PIL
from PIL import Image
from sys import argv
import urllib
import urllib.request
from bs4 import BeautifulSoup
import datetime

def Help():
    print('Instagram image downloader')
    print('')
    print('Usage:')
    print('insta_downloader.py [OPTION] [URL]')
    print('')
    print('Options:')
    print('-u [Instagram URL]\tDownload single photo from Instagram URL')
    print('-f [File path]\t\tDownload Instagram photo(s) using file list')
    print('-h, --help\t\tShow this help message')
    print('')
    print('Example:')
    print('python insta_downloader.py -u https://instagram.com/p/xxxxx')
    print('python insta_downloader.py -f /home/username/filelist.txt')
    print('')
    exit()

def DownloadSingleFile(fileURL):
    print("Downloading image.....")
    with urllib.request.urlopen(fileURL) as f:
        htmlSource = f.read()
        soup = BeautifulSoup(htmlSource, 'html.parser')
        metaTag = soup.find_all('meta', {'property': 'og:image'})
        imgURL = metaTag[0]['content']
        fileName = datetime.datetime.now().strftime("%Y%m%d%H%M%S") + '.jpg'
        data = urllib.request.urlretrieve(imgURL, fileName)
        print("Image downloaded.Saved as", data)

if __name__ == "__main__":
    if len(argv) == 1:
        Help()
    if argv[1] in ('-h', '--help'):
        Help()
    elif argv[1] == '-u':
        instagramURL =argv[2]
        DownloadSingleFile(instagramURL)
    elif argv[1] == '-f':
        filePath = argv[2]
        f = f.readline()
        while line:
            instagramURL = line.rstrip('\n')
            DownloadSingleFile(instagramURL)
            line = f.readline()
        f.close()


**Paste the url of the book you want to download and press the doanload key the book will be doanloaded in the download folder**

The location of the download folder can be changed by going in the python file and chnaging the location there:
```python
def Download_button_command(url):
    w=Wattpad()
    book=w.get_book_by_url(url.get())
    book.convert_to_epub(loc='C:/Users/HP/Downloads')
```

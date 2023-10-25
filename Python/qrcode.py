import qrcode

def QR():
    qr = qrcode.QRCode(
        version=1,
        box_size=15,
        border=5
    )
    data = input("Enter any data to be converted:")
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save("qr_one.png")
    return img

QR
from flask import Flask, request
import pyqrcode
import sys
import hashlib
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_url_path='/static')
CORS(app)
root = os.path.join(os.path.dirname(os.path.abspath(__file__)))

@app.route("/")
def hello():
    data = request.get_json()
    product_type = str(data.get('product_type'))
    manufacturer_date = str(data.get('manufacturer_date'))
    expiry_date = str(data.get('expiry_date'))
    manufacturer_location = str(data.get('manufacturer_location'))
    batch_id = str(data.get('batch_id'))
    urls = str(data.get('url'))

    generate_data = product_type + manufacturer_date + expiry_date + manufacturer_location + batch_id
    generate_hash = fn_hash(generate_data)
    print("Hash created")

    qr_code_for = urls + '?code=' + generate_hash
    url = pyqrcode.create(qr_code_for, error='L', version=27, mode='binary')
    url.png('static/qr_code.png', scale=8)
    print("Printing QR code")

    # Qr code file path
    qr_code_path = root + '/static/qr_code.png'

    return { "data" : data, "hash": generate_hash, "qr_code_path": qr_code_path }, 200

def fn_hash(secret):
    try:
        hash_method = hashlib.sha256()
        secret_byte = secret.encode('utf-8')
        hash_method.update(secret_byte)
        hash_sha256_key = hash_method.hexdigest()
        return str(hash_sha256_key)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)

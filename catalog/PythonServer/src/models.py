from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (StringField)

class Product(Document):

    meta = {'collection': 'Product'}
    name = StringField()
    kind = StringField()
    price= StringField()
    idnum= StringField()
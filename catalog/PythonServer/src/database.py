from mongoengine import connect

from models import Product

connect('SOA-P2', host='mongodb+srv://catalogservice:soa12345@soa-p2-mgwn5.mongodb.net/test?retryWrites=true', alias='default')


def init_db():
    # Create the fixtures

    chocolate = Product(
        name='Choco Chips',
        kind='Sugar content',
        price='500',
        idnum='001'
    )
    chocolate.save()

    vanilla = Product(
        name='Snow Wheels',
        kind='Sugar content',
        price='500',
        idnum='002'
    )
    vanilla.save()

    cheescake = Product(
        name='Cheeskies',
        kind='Sugar content',
        price='600',
        idnum='003'
    )
    cheescake.save()
    
    almond = Product(
        name='Almenders',
        kind='Sugar free',
        price='600',
        idnum='004'
    )
    almond.save()

    strawberry = Product(
        name='Strawberry Shortcake',
        kind='Sugar free',
        price='600',
        idnum='005'
    )
    strawberry.save()
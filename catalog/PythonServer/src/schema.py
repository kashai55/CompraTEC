import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Product as ProductModel

class Product(MongoengineObjectType):

    class Meta:
        model = ProductModel
        interfaces = (Node,)

class Query(graphene.ObjectType):
    node = Node.Field()
    all_Products = MongoengineConnectionField(Product)

schema = graphene.Schema(query=Query, types=[Product])


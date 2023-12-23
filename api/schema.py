import strawberry
from api.types.mutation import Mutation
from api.types.organization import Organization
from api.types.person import Person
from api.types.query import Query

schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
    # these types implement an interface and do not appear directly in schema
    types=[Person, Organization],
)

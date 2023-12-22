from enum import Enum
import strawberry


@strawberry.enum
class Category(Enum):
    ALL = "ALL"
    EDUCATION = "EDUCATION"
    NEWS = "NEWS"
    COOKING = "COOKING"

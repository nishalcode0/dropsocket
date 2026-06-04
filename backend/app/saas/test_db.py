from database import supabase

result = (
    supabase
    .table("products")
    .select("*")
    .execute()
)

print(result.data)


from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

#Import routes
#from routers.auth import router as auth_router 
from routers.products import router as products_router
#from routers.orders import router as orders_router 
#from routers.payments import router as payments_router 
#from routers.analytics import router as analytics_router 
#from routers.stores import router as stores_router

app = FastAPI(
    title="DropSocket API",
    description="Creator-focused digital product marketplace",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://dropsocket.in"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

#Include all routers
#app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(products_router, prefix="/api/products", tags=["Products"])
#app.include_router(orders_router, prefix="/api/orders", tags=["Orders"])
#app.include_router(payments_router, prefix="/api/payments", tags=["Payments"])
#app.include_router(analytics_router, prefix="/api/analytics", tags=["Analytics"])
#app.include_router(stores_router, prefix="/api/stores", tags=["Stores"])

#Health check
@app.get("/api/health")
async def health():
    return {"status":"ok","service":"DropSocket API"}

#Root 
@app.get("/")
async def root():
    return {"message":"DropSocket API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0",port=8000,reload=True)



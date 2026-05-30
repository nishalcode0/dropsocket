from fastapi import FastAPI, HTTPException 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os 
from dotenv import load_dotenv
import resend

load_dotenv()

app = FastAPI()

#CORS middleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://dropsocket.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

resend.api_key = os.getenv("RESEND_API_KEY").strip()

class BetaAccessForm(BaseModel):
    name: str
    email: EmailStr
    create_sell: str 
    current_platform: str | None = None 
    social_handle: str | None = None 
    pain_point: str | None = None 
    desired_features: str 

@app.post("/api/beta-access")
async def submit_beta_access(form_data: BetaAccessForm):
    try:
        email_body = f"""
        New Beta Access Request:

        Required Fields:
        - Name: {form_data.name}
        - Email: {form_data.email}
        - What they create/sell: {form_data.create_sell}
        - Desired Features: {form_data.desired_features}

        Optional Fields:
        - Current Selling Platform: {form_data.current_platform or 'Not Provided'}
        - Social Media Handle: {form_data.social_handle or 'Not Provided'}
        - Painful Workflows: {form_data.pain_point or 'Not Provided'}

        """
        result = resend.Emails.send(
            {
                "from":"onboarding@resend.dev",
                "to":"code0.nishal@gmail.com",
                "subject":f"New Beta Access Request from {form_data.name}",
                "html":f"<pre>{email_body}</pre>",
            }
        )

        resend.Emails.send(
            {
                "from":"onboarding@resend.dev",
                "to":form_data.email,
                "subject":"Welcome to DropSocket Beta Access Waitlist",
                "html":f"""
                <h2>Thank you, {form_data.name}!</h2>
                <p>We've received your beta access request and added you to our exclusive waitlist.</p>
                <p> You'll receive a 10% discount when we launch. Expect an email from us soon with early access details.</p>
                <p> best regards,<br> The DropSocket Team</p>
                """,
            }
        )

        return {"success":True,"message":"Request received successfully"}

    except Exception as e:
         print("ERROR:", e)
         raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status":"ok"}

@app.get("/")
async def root():
    return {"message":"Backend is live"}





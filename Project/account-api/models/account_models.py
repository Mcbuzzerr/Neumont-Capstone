from pydantic import BaseModel, Field, EmailStr, validator
from typing import Optional, List
from beanie import Document
import uuid
from enum import Enum


class OAuthMethod(str, Enum):
    google = "google"
    github = "github"
    # facebook = "facebook"
    # twitter = "twitter"
    # discord = "discord"
    # microsoft = "microsoft"


class OAuthAccount(BaseModel):
    name: str
    email: EmailStr
    oauth_method: OAuthMethod
    oauth_id: str


class AccountAuth(BaseModel):
    email: EmailStr
    password: str

    # GPT snippet
    @validator("password")
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long")
        return value

    # GPT snippet end


class AccountIn(AccountAuth):
    name: str


class AccountOut(BaseModel):
    account_id: uuid.UUID
    name: str
    email: EmailStr
    projects: Optional[List[str]] = Field([])


class Account(AccountOut, Document):
    account_id: uuid.UUID = Field(default_factory=uuid.uuid4)
    password: Optional[str]
    # Accounts with verified emails and multiple oauth methods will be merged
    oauth_accounts: Optional[List[OAuthAccount]] = Field([])
    isDeactivated: Optional[bool] = Field(False)
    emailVerified: Optional[bool] = Field(False)
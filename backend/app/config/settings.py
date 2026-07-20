
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    APP_NAME: str = "MathVizPlatform"
    APP_ENV: str = "development"

    DATABASE_URL: str = "sqlite+aiosqlite:///./mathviz.db"
    REDIS_URL: str = "redis://localhost:6379/0"

    JWT_SECRET: str = "change_me"
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 1440

    CORS_ORIGINS: str = "http://localhost:3000"
    LOG_LEVEL: str = "INFO"

settings = Settings()

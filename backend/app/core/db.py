from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from app.core.config import DATA_DIR, DATABASE_URL, IS_VERCEL


if not IS_VERCEL:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

engine = None if IS_VERCEL else create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = None if IS_VERCEL else sessionmaker(bind=engine, autoflush=False, autocommit=False)


class Base(DeclarativeBase):
    pass


def get_db():
    if SessionLocal is None:
        yield None
        return

    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

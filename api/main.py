from typing import Annotated, Union

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from sqlalchemy import create_engine

mysql_user = "root"
mysql_password = "02022003aA"
mysql_host = "localhost"
mysql_port = 3306
mysql_db = "pharmacy"

mysql_url = f"mysql+pymysql://{mysql_user}:{mysql_password}@{mysql_host}:{mysql_port}/{mysql_db}"
engine = create_engine(mysql_url)

app = FastAPI()

# -*- coding: utf-8 -*-
"""
Created on Sun May 30 18:59:00 2021

@author: mohap

Threshold 1% ro 1
"""

from fastapi import FastAPI
from fastapi.responses import JSONResponse
import biodata as b
import genome as g
from pydantic import BaseModel

class Data(BaseModel):
    perc: int
    sequence: str
   
out = {}
# present = g.gen2
# threshperc = 4


app = FastAPI()


@app.post("/")
async def root(data: Data):
    
    gen = data.sequence.replace(' ','')
    res = await compute(gen,data.perc)
    message = {'success':True,"data":res}
    return JSONResponse(content=message)


for h in b.mhc:
    out[h] = []

def add(s,i,threshperc):
    count = 0
    n = len(s)
    for j in range(n):
        
        count += b.matrice[i][0][s[j]][j]
    temp = []
    for k  in b.matrice[i][1]:
        temp.append(count >= k)
    count *= b.matrice[i][2]
    
    if count >= b.matrice[i][1][threshperc-1]:
        out[i].append({'peptide':s,'value':round(count,2)})

def multiply(s,i,threshperc):
    count = 1
    n = len(s)
    for j in range(n):
        count *= b.matrice[i][0][s[j]][j]
    
    temp = []
    for k  in b.matrice[i][1]:
        temp.append(count >= k)
    
    count *= b.matrice[i][2]
    
    if count >= b.matrice[i][1][threshperc-1]:
        out[i].append({'peptide':s,'value':round(count,2)})

def score(s,perc):
    for i in b.mhc:
        if i in b.isAdd: add(s,i,perc)
        else: multiply(s,i,perc)

async def compute(present,perc):
    n = len(present)
    for i in range(n-8):
        score(present[i:i+9],perc)
        
    for z in out:
        print(z,out[z])
    print(out)
    return out
    
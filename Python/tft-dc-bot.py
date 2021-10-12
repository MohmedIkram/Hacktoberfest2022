import discord
import os 
import requests
import json
from discord.ext import commands
import random

bot = commands.Bot(command_prefix='!')

def get_quote(name):
    response = requests.get("https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{0}?api_key=RiotApiKey".format(name))
    json_data = json.loads(response.text)
    userId = json_data["id"]
    response2 = requests.get("https://tr1.api.riotgames.com/tft/league/v1/entries/by-summoner/{0}?api_key=RiotApiKey".format(userId))
    user_league = json.loads(response2.text)
    tier = user_league[0]["tier"]
    return tier 

@bot.command()
async def ping(ctx):
	await ctx.channel.send("pong")

@bot.command(name = 'tier')
async def tier(ctx, *,  content: get_quote):
    await ctx.send(content)

@bot.event
async def on_message(message):
	if message.content.startswith("!hi"):
		await message.channel.send("hello pal!!")
	await bot.process_commands(message)

bot.run("DC Access Token")


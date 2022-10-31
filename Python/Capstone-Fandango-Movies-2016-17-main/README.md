# Capstone-Fandango-Movies-2016-17

## Our Goal
are planning on going out to see a movie, how well can you trust online reviews and ratings? Especially if the same company showing the rating also makes money by selling movie tickets.
Do they have a bias towards rating movies higher than they should be rated?
## Sites Data
all_sites_scores.csv contains every film that has a Rotten Tomatoes rating, a RT User rating, a Metacritic score, a Metacritic User score, and IMDb score, and at least 30 fan reviews on Fandango. The data from Fandango was pulled on Aug. 24, 2015.

Column | Description
--- | ---------
movie | the name of the movie
year | the release year of the movie
metascore | the Metacritic rating of the movie (the "metascore" - critic score)
imdb | the IMDB rating of the movie (user score)
tmeter | the Rotten Tomatoes rating of the movie (the "tomatometer" - critic score)
audience | the Rotten Tomatoes rating of the movie (user score)
fandango | the Fandango rating of the movie (user score)
n_metascore | the metascore normalized to a 0-5 scale
n_imdb | the IMDB rating normalized to a 0-5 scale
n_tmeter | the tomatometer normalized to a 0-5 scale
n_audience | the Rotten Tomatoes user score normalized to a 0-5 scale
nr_metascore | the metascore normalized to a 0-5 scale and rounded to the nearest 0.5
nr_imdb | the IMDB rating normalized to a 0-5 scale and rounded to the nearest 0.5
nr_tmeter | the tomatometer normalized to a 0-5 scale and rounded to the nearest 0.5
nr_audience | the Rotten Tomatoes user score normalized to a 0-5 scale and rounded to the nearest 0.5

## Exploring Fandango Displayed Scores versus True User Ratings
![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/Data.PNG)

## Visulation Between Rating And Votes
 Let's explore the relationship between popularity of a film and its rating. Create a scatterplot showing the relationship between rating and votes. Feel free to edit visual styling to your preference
 ![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/Rating%20And%20Votes.PNG)
 
 ## Visualize the count of movies per year with a plot:
 ![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/Movies%20per%20year.PNG)
 # KDE plot (or multiple kdeplots) that displays the distribution of ratings that are displayed (STARS) versus what the true rating was from votes (RATING). Clip the KDEs to 0-5.
 ![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/Stars.PNG)
 ## Comparing Distribution of Scores Across Sites
 
 Now the moment of truth! Does Fandango display abnormally high ratings? We already know it pushs displayed RATING higher than STARS, but are the ratings themselves higher than average?
 
 ![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/Kde%20plot.PNG)
 
 ## Visualize the distribution of ratings across all sites for the top 10 worst movies.
 
 ![](https://github.com/Wasif-M/Capstone-Fandango-Movies-2016-17/blob/main/result.PNG)
 
 
 
 
 
 
 
 
 
 
 

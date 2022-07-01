# MM_DASH

  

Multimedia Systems project

  
  

### Prerequisites

```sh
sudo apt update
sudo apt install sqlite3
pip3 install python-ffmpeg-video-streaming
python3 chunkCreator.py
sqlite3 movies.db
```

```sql
CREATE TABLE movies(id integer NOT NULL, name text NOT NULL, link text NOT NULL, image_path text NOT NULL,director_name text NOT NULL,score REAL NOT NULL,description text NOT NULL);
INSERT INTO movies VALUES (1, "The Shawshank Redemption", "link", "Front/The_Shawshank_Redemption.jpg","Frank Darabont",9.3,"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.");
INSERT INTO movies VALUES (2, "The Godfather", "link", "Front/The_Godfather.jpg","Francis Ford Coppola",9.2,"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.");
INSERT INTO movies VALUES (3, "The Dark Knight", "link", "Front/The_Dark_Knight.jpg","Christopher Nolan",9,"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.");
INSERT INTO movies VALUES (4, "The Godfather Part II", "link", "Front/The_Godfather_PartII.jpg","Francis Ford Coppola",9,"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.");
INSERT INTO movies VALUES (5, "12 Angry_Men", "link", "Front/12_Angry_Men.jpg","Sidney Lumet",9,"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.");
INSERT INTO movies VALUES (6, "Schindler's List", "link", "Front/Schindlers_List.jpg","Steven Spielberg",9,"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.");
```

  
  
### Executing program

```sh
git clone https://github.com/smmir-cent/MM_DASH.git
docker-compose up --build
curl localhost:3000
```
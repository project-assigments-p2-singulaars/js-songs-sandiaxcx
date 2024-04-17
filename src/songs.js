//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result1 = array.map(song => song.artist);;
    console.log(result1);
    return result1;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result2 = array.filter(song => song.artist === artist);
    return result2;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let result3 = array.map(song => song.title).sort();
    if(result3.length < 3){
        return result3;
    }
    return result3.slice(0, 10);
};

//Exercise 4: Order by year, ascending
function orderByYear(songs){
    return songs.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
    return songs.filter(song => song.genre.includes(genre));
};

//Exercise 6: Modify the duration of songs to seconds

//Exercise 7: Get the longest song

// function getLongestSong(){

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

// function getShortestSong(songs){


export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };

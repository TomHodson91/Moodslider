import { getMovies } from './getMovies';

describe('filters the movies based on mood value from sliders', () => {
    [{
        it: 'returns only calm movies',
        calmMoodValue: 50,
        toEqual: ['Inception', 'Shrek', 'Toy Story']
    },{
        it: 'returns only sad movies',
        sadMoodValue: 50,
        toEqual: ['The Boy in Striped Pyjamas', "Schindler's List", 'Titanic']
    },{
        it: 'returns only wide awake movies',
        wideAwakeMoodValue: 50,
        toEqual: ['First Blood', 'Bruce Almighty']
    },{
        it: 'returns only fearless movies',
        fearlessMoodValue: 50,
        toEqual: ['Gladiator']
    },{
        it: 'returns only agitated movies',
        calmMoodValue: 49,
        toEqual: ['I Robot']
    },{
        it: 'returns only happy movies',
        sadMoodValue: 49,
        toEqual: ['School of Rock', 'The Hangover', 'Anchorman']
    },{
        it: 'returns only tired movies',
        wideAwakeMoodValue: 49,
        toEqual: ['Intouchables']
    },{
        it: 'returns only scared movies',
        fearlessMoodValue: 49,
        toEqual: ['A Nightmare on Elm Street']
    }
].forEach(scenario => {
        it(scenario.it, () => {
            //given
            let movies = [
                {
                    programmeId: 1, 
                    name: 'A Nightmare on Elm Street',
                    imagepath: '../Images/Elm.jpg',
                    mood: 'Scared',
                },{
                    programmeId: 2, 
                    name: 'School of Rock',
                    imagepath: '../Images/School.jpg',
                    mood: 'Happy',
                },{
                    programmeId: 3, 
                    name: 'First Blood',
                    imagepath: '../Images/First.jpg',
                    mood: 'Wide Awake',
                },{
                    programmeId: 4, 
                    name: 'The Hangover',
                    imagepath: '../Images/Hangover.jpg',
                    mood: 'Happy',
                },{
                    programmeId: 5, 
                    name: 'Anchorman',
                    imagepath: '../Images/Anchorman.jpg',
                    mood: 'Happy',
                },{
                    programmeId: 6, 
                    name: 'Bruce Almighty',
                    imagepath: '../Images/Bruce.jpg',
                    mood: 'Wide Awake',
                },{
                    programmeId: 7, 
                    name: 'Inception',
                    imagepath: '../Images/Inception.jpg',
                    mood: 'Calm',
                },{
                    programmeId: 8, 
                    name: 'Shrek',
                    imagepath: '../Images/Shrek.jpg',
                    mood: 'Calm',
                },{
                    programmeId: 9, 
                    name: 'The Boy in Striped Pyjamas',
                    imagepath: '../Images/Boy.jpg',
                    mood: 'Sad',
                },{
                    programmeId: 10, 
                    name: "Schindler's List",
                    imagepath: '../Images/Schindler.jpg',
                    mood: 'Sad',
                },{
                    programmeId: 11, 
                    name: 'Intouchables',
                    imagepath: '../Images/Intouchables.jpg',
                    mood: 'Tired',
                },{
                    programmeId: 12, 
                    name: 'I Robot',
                    imagepath: '../Images/Irobot.jpg',
                    mood: 'Agitated',
                },{
                    programmeId: 13, 
                    name: 'Titanic',
                    imagepath: '../Images/Titanic.jpg',
                    mood: 'Sad',
                },{
                    programmeId: 14, 
                    name: 'Toy Story',
                    imagepath: '../Images/Toy Story.jpg',
                    mood: 'Calm',
                },{
                    programmeId: 15, 
                    name: 'Gladiator',
                    imagepath: '../Images/Gladiator.jpg',
                    mood: 'Fearless',
                }
            ];
    
            //when
            let calmMoodValue = scenario.calmMoodValue
            let sadMoodValue = scenario.sadMoodValue
            let wideAwakeMoodValue = scenario.wideAwakeMoodValue
            let fearlessMoodValue = scenario.fearlessMoodValue
    
            //then
            expect(getMovies(calmMoodValue, sadMoodValue, wideAwakeMoodValue, fearlessMoodValue, movies))
                .toEqual(scenario.toEqual);
        });
    });
});

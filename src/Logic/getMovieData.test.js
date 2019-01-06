import xmlExample from '.../xmlExample.xml';
import getMovieData from './getMovieData'

describe('moodslider app', () => {

    it('returns correct title', () => {
        //given
        xml = xmlExample;
        //when
        getMovieData(xml)
        //then
        expect(title1).toBe('A Nightmare on Elm Street');
    });
  })
import React from 'react';
import CardSlider from '../components/CardSlider';

export default function MyListSlider({movies}) {

    const getMoviesFromRange = (from, to) => {
        return movies.slice(from, to);
    }
    return (
        <div>
            <CardSlider title="Movies" data={getMoviesFromRange(0, 10)} />
            <CardSlider title="Tv Shows" data={getMoviesFromRange(10, 20)} />
            <CardSlider title="Continue Watching for You" data={getMoviesFromRange(20, 30)} />
        </div>
    );
}

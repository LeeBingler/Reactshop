import { PropTypes } from 'prop-types';
import { HalfStar, EmptyStar, FullStar } from './Stars';

function RatingStars({ rating }) {
    const {rate, count} = rating;
    const arrayStar = setArrayStar();

    function setArrayStar () {
        let arrayStar = [];
        let cpyRate = Number(rate);


        for (; cpyRate >= 1; cpyRate--) {
            arrayStar.push(<FullStar key={cpyRate * 78945} />);
        }

        if (arrayStar.length != 5 && (cpyRate >= 0.5 && cpyRate < 0.9)) {
            arrayStar.push(<HalfStar key={cpyRate * 10 * 4854} />);
        }

        while (arrayStar.length < 5) {
            arrayStar.push(<EmptyStar key={arrayStar.length * 48951} />);
        }

        return arrayStar;
    }

    return (
        <div className='flex py-3 gap-6'>
            <p className='font-semibold text-yellow-400 md:ml-4'>
                {
                    arrayStar
                }
            </p>
            <p className='text-blue-800'> {count} ratings </p>
        </div>
    );
}

RatingStars.propTypes = {
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    }).isRequired
}

export default RatingStars;

import { PropTypes } from 'prop-types';

function RatingStars({ rating }) {
    const {rate, count} = rating;
    const fullStar = <i className='bx bxs-star'></i>
    const emptyStar = <i className='bx bx-star' ></i>
    const halfStar = <i className='bx bxs-star-half' ></i>
    const arrayStar = setArrayStar();

    function setArrayStar () {
        let arrayStar = [];
        let cpyRate = Number(rate);


        for (; cpyRate > 1; cpyRate--) {
            arrayStar.push(fullStar);
        }

        if (arrayStar.length != 5 && (cpyRate > 0.5 && cpyRate < 0.9)) {
            arrayStar.push(halfStar);
        }

        while (arrayStar.length < 5) {
            arrayStar.push(emptyStar);
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

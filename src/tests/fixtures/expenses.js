import moment from "moment";

export default [{
    id: '1',
    description: 'coffee',
    note: 'every day',
    amount: 495,
    createdAt: 0
}, {
    id: '2',
    description: 'June Rent',
    note: 'monthly',
    amount: 250000,
    createdAt: moment(0).subtract(3, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
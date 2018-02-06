const priceHeader = [
    {
        title: 'Type of Room',
        dataIndex: 'type',
        key: 'type'
      }, {
        title: '4 weeks',
        dataIndex: '4',
        key: '4'
      }, {
        title: '8 weeks',
        dataIndex: '8',
        key: '8'
      },
      {
        title: '12 weeks',
        dataIndex: '12',
        key: '12'
      }
];
 const priceSource = [
    {
    key: '1',
    type: 'Twin room',
    4: 205,
    8: 200,
    12:200
  },
  {key: '2',
  type: '3 people shared room',
  4: 180,
  8: 175,
  12:175
},
{key: '3',
type: '4 people shared room',
4: 170,
8: 165,
12:165
},
{key: '4',
type: '5 people shared room [Female only]',
4: 170,
8: 165,
12:165
},
{key: '5',
type: '6 people shared room [Male only]',
4: 155,
8: 150,
12:150
},
{key: '6',
type: '8 people shared room [Mixed]',
4: 140,
8: 135,
12:135
}
];

export {priceHeader};
export default priceSource;
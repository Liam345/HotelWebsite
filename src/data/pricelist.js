const columns = [
    {
        title: 'Type of Room',
        dataIndex: 'type',
        key: 'type'
      }, {
        title: '12 weeks',
        dataIndex: '12',
        key: '12'
      }, {
        title: '24 weeks',
        dataIndex: '24',
        key: '24'
      },
      {
        title: '48 weeks',
        dataIndex: '48',
        key: '48'
      }
];
 const VSYPrice = [
    {
    key: '1',
    type: 'Single-Ensuite',
    12: 360,
    24: 350,
    48:330
  },
  {key: '2',
  type: 'Twin Room-Ensuite',
  12: 270,
  24: 260,
  48:235
},
{key: '3',
type: '3 Shared Room-Ensuite',
12: 250,
24: 240,
48:210
},
{key: '4',
type: '4 Shared Room-Ensuite',
12: 225,
24: 215,
48:195
}
];

export {columns};
export default VSYPrice;
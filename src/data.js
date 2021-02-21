const data = [
    {
        id: 1,
        name: 'Gram (+) rod',
        children: [2, 3], 
    },
    {
        id: 2,
        name: 'Regular shape',
        children: [4, 5]
    },
    {
        id: 4,
        name: 'Catalase (+)',
        children: []
    },
    {
        id: 5,
        name: 'Catalase (-)',
        children: []
    }
    {
        id: 3,
        name: 'Irregular/pleomorphic shape',
        children: []
    }
]


// const data = {
//     'Gram (+) rod': {
//         name: 'Gram (+) rod',
//         children: {
//             'Regular shape': {
//                 name: 'Regular shape',
//                 children: {
//                     'Catalase (+)': {},
//                     'Catalase (-)': {}
//                 }
//             },
//             'Irregular/pleomorphic shape': {
//                 name: 'Irregular/pleomorphic shape',
//                 children: {
//                     'Catalase (+)': {},
//                     'Catalase (-)': {}
//                 }
//             }
//         }
//     }
// }

export default data;
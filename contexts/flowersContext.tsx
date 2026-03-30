// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { flowers } from '../data/flowers';
// import { flower } from '../types/flower';
// import { View, Text } from 'react-native';
// import Popup from '@/components/shenkar26/Popup';

// const flowerContext = createContext(undefined);

// export default function flowersContext({children}:any) {
//     const [flowersList, setFlowerList] = useState(flowers);

//     const AddFlower = (newFlower: flower) => {
//         try {
//             setFlowerList((prev) => [...prev, newFlower]);
//         } catch (error) {
//             <Popup message="לא ניתן להוסיף פרח" />
//         }
//     }

//     const updateFlower = (id: string, updatedFlower: flower) => {
//         try {
//             setFlowerList((prev) =>
//                 prev.map((flower) =>
//                     flower.item_id === id ? updatedFlower : flower
//                 )
//             );
//         } catch (error) {
//             <Popup message="לא ניתן לעדכן פרטי פרח" />
//         }
//     }

//     const removeFlower = (id: string) => {
//         try {
//             setFlowerList((prev) =>
//                 prev.filter((flower) => flower.item_id !== id)
//             );
//         } catch (error) {
//             <Popup message="לא ניתן למחוק פרח" />
//         }
//     };

//     return (
//         <flowerContext.Provider value={{AddFlower, updateFlower, removeFlower}}>
//             {children}
//         </flowerContext.Provider>
//     )
// }
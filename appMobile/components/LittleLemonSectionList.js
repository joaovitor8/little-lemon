import { View, Text, StyleSheet, SectionList} from 'react-native';


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];


export default function LittleLemonSectionList() {
  return(
    <View>
      <SectionList
      sections={[
        {title: "Appetizers", data: menuItemsToDisplay[0].data},
        {title: "Main Dishes", data: menuItemsToDisplay[1].data},
        {title: "Sides", data: menuItemsToDisplay[2].data},
        {title: "Desserts", data: menuItemsToDisplay[3].data},
      ]}
      renderItem={({item}) => (<View><Text style={styleList.itensMenu}>{item.name}   -   {item.price}</Text></View>)}
      renderSectionHeader={({section}) => (<View><Text style={styleList.tituloMenu}>{section.title}</Text></View>)}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}


const styleList = StyleSheet.create({
  tituloMenu: {
    backgroundColor: '#F4CE14',
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },

  itensMenu: {
    color: '#F4CE14',
    fontSize: 18,
    marginBottom: 10
  },
});
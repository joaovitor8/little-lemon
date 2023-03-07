import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';


const CategoryList = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCategorySelect = (categoryId) => {
    setSelectedCategories((prevSelected) => ({
      ...prevSelected,
      [categoryId]: !prevSelected[categoryId],
    }));
  };


  const renderCategory = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <Category
          category={item}
          selected={selectedCategories[item.id]}
          onSelect={handleCategorySelect}
        />
      )}
      keyExtractor={keyExtractor}
      scrollEnabled={true}
    />
  );
  
};


const Category = ({ category, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(category.id)}
      style={[
        estilos.category,
        { backgroundColor: selected ? 'blue' : 'white' },
      ]}
    >
      <Text style={{ color: selected ? 'white' : 'black' }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};


export const App = () => {
  const categories = [
    { id: 1, name: 'Starters' },
    { id: 2, name: 'Mains' },
    { id: 3, name: 'Desserts' },
    { id: 4, name: 'Drinks' },
  ];

  return (
    <View>
      <CategoryList categories={categories} />
    </View>
  );
};

const estilos = StyleSheet.create({});

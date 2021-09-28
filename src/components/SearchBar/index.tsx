import React, { useCallback } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import theme from "lib/Theme";
import debounce from "lib/utils/debounce";
import useStore from "lib/Store";
import Text from "components/utils/Text";
import styles from "./styles";

interface ISearchBar {
  onPressSorting?: () => void;
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { setSearchKeyword, searchKeyword, selectedSort } = useStore(
    (state) => state
  );

  const onChangeTex = debounce(
    useCallback((query: string) => {
      setSearchKeyword(query);
    }, []),
    500
  );

  return (
    <View style={styles.searchBar}>
      <Image
        source={require("components/icon/magnifier.png")}
        style={{ width: 20, height: 20 }}
      />
      <TextInput
        style={styles.searchBar__input}
        defaultValue={searchKeyword}
        onChangeText={onChangeTex}
        placeholder="Cari nama, bank, atau nominal"
        placeholderTextColor={theme.colors.gray}
      />
      <TouchableOpacity
        style={styles.searchBar__sorting__button}
        onPress={props.onPressSorting}
      >
        <Text
          paddingRight={3}
          fontSize={12}
          fontWeight="bold"
          color={theme.colors.orange}
        >
          {selectedSort.title}
        </Text>
        <Image
          source={require("components/icon/chevron.png")}
          style={{ width: 13, height: 8 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);

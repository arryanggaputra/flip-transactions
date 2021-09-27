import React, { useCallback } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import theme from "lib/Theme";
import debounce from "lib/utils/debounce";
import useStore from "lib/Store";
import Text from "components/utils/Text";
import styles from "./styles";

interface ISearchBar {
  onPressSorting?: () => void;
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { setSearchKeyword, searchKeyword } = useStore((state) => state);

  const onChangeTex = debounce(
    useCallback((query: string) => {
      setSearchKeyword(query);
    }, []),
    500
  );

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchBar__input}
        defaultValue={searchKeyword}
        onChangeText={onChangeTex}
        placeholder="Cari nama, bank, atau nominal"
      />
      <TouchableOpacity onPress={props.onPressSorting}>
        <Text fontSize={12} fontWeight="bold" color={theme.colors.orange}>
          URUTKAN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);

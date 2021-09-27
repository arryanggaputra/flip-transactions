import React, { useCallback } from "react";
import { TextInput, View } from "react-native";
import theme from "lib/Theme";
import debounce from "lib/utils/debounce";
import useStore from "lib/Store";

const SearchBar = () => {
  const { setSearchKeyword, searchKeyword } = useStore((state) => state);

  const onChangeTex = debounce(
    useCallback((query: string) => {
      setSearchKeyword(query);
    }, []),
    500
  );

  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        borderRadius: 8,
      }}
    >
      <TextInput
        style={{
          paddingVertical: theme.size.xl,
          paddingHorizontal: theme.size.lg,
        }}
        defaultValue={searchKeyword}
        onChangeText={onChangeTex}
        placeholder="Cari nama, bank, atau nominal"
      />
    </View>
  );
};

export default SearchBar;

import InputRadio from "components/InputRadio";
import { getTransactionSortLists } from "lib/Service/transactions";
import useStore from "lib/Store";
import React, { useCallback, useMemo } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { SortingList_Entity } from "types";
import styles from "./styles";

interface IModalSort {
  onClose?: () => void;
}

const ModalSort: React.FC<IModalSort> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onClose}
      activeOpacity={0}
      style={styles.modal}
    >
      <TouchableWithoutFeedback>
        <View style={styles.modal__content}>
          {getTransactionSortLists.map((item) => (
            <SortingList key={`${item.field}-${item.orderBy}`} {...item} />
          ))}
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const SortingList: React.FC<SortingList_Entity> = React.memo((props) => {
  const { selectedSort, setSelectedSort } = useStore((state) => state);

  const onPress = useCallback(() => {
    setSelectedSort(props);
  }, [props]);

  const checked = useMemo(
    () =>
      selectedSort.field === props.field &&
      selectedSort.orderBy === props.orderBy,
    [props, selectedSort]
  );

  return <InputRadio checked={checked} onPress={onPress} title={props.title} />;
});

export default React.memo(ModalSort);

import InputRadio from "components/InputRadio";
import useStore from "lib/Store";
import React, { useCallback, useMemo } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Transaction_Entity } from "types";
import styles from "./styles";

interface IModalSort {
  onClose?: () => void;
}

interface SortingList_Entity {
  field?: keyof Transaction_Entity;
  title: string;
  orderBy: "asc" | "desc";
}

const sortingLists: Array<SortingList_Entity> = [
  {
    title: "URUTKAN",
    orderBy: "asc",
  },
  {
    title: "Nama A-Z",
    field: "beneficiary_name",
    orderBy: "asc",
  },
  {
    title: "Nama Z-A",
    field: "beneficiary_name",
    orderBy: "desc",
  },
  {
    title: "Tanggal Terbaru",
    field: "created_at",
    orderBy: "desc",
  },
  {
    title: "Tanggal Terlama",
    field: "created_at",
    orderBy: "asc",
  },
];

const ModalSort: React.FC<IModalSort> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onClose}
      activeOpacity={0}
      style={styles.modal}
    >
      <TouchableWithoutFeedback>
        <View style={styles.modal__content}>
          {sortingLists.map((item) => (
            <SortingList key={`${item.field}-${item.orderBy}`} {...item} />
          ))}
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const SortingList: React.FC<SortingList_Entity> = React.memo((props) => {
  const { sortField, setSortField } = useStore((state) => state);
  const onPress = useCallback(() => {
    setSortField(props.field, props.orderBy);
  }, [props]);

  const checked = useMemo(
    () => sortField.key === props.field && sortField.orderBy === props.orderBy,
    [props, sortField]
  );

  return <InputRadio checked={checked} onPress={onPress} title={props.title} />;
});

export default React.memo(ModalSort);

const sortGeneric = <T>(key: keyof T, order: "asc" | "desc") => {
  const sortOrder = order === "asc" ? 1 : -1;
  return (a: T, b: T) => {
    const A = a[key];
    const B = b[key];
    if (A < B) {
      return sortOrder * -1;
    } else if (A > B) {
      return sortOrder * 1;
    } else {
      return 0;
    }
  };
};

export default sortGeneric;

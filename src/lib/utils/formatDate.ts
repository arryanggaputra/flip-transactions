export const Monthlabel = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const formatDate = (value: string) => {
  let date = new Date(value.replace(" ", "T"));
  let string = `${date.getDate()} ${
    Monthlabel[date.getMonth() - 1]
  } ${date.getFullYear()}`;
  return string;
};

export default formatDate;

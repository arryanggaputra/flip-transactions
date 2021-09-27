const formatCurrency = (amount = 0, prefix = "Rp") => {
  if (!amount) return "Rp 0";
  return (
    prefix +
    amount
      .toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
};

export default formatCurrency;

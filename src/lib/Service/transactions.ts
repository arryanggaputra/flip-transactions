export const getTransaction = async () => {
  return fetch("https://nextar.flip.id/frontend-test", {
    method: "GET",
  }).then((res) => res.json());
};

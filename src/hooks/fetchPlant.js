export const fetchPlant = async ({ queryKey }) => {
  const id = queryKey[1];
  if (!id) return null;
  const res = await fetch(
    `https://trefle.io/api/v1/plants?token=nPhiI1owDYQTM_cM-GzkSeO-w7_zFtZ3dRGKPwPVQ0o&filter%5Bid%5D=${id}`
  );
  if (!res.ok) throw new Error("invalid fetch");
 return res.json();
};

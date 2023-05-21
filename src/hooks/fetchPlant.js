export const fetchPlant = async ({ queryKey }) => {
  const id = queryKey[1];
  if (!id) return null;
  const res = await fetch(
    `https://trefle.io/api/v1/plants/${id}?token=nPhiI1owDYQTM_cM-GzkSeO-w7_zFtZ3dRGKPwPVQ0o`
  );
  if (!res.ok) throw new Error("invalid fetch");
  const json =await res.json()
 return json;
};

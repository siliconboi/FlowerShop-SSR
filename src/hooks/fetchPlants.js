export const fetchPlants = async ({ queryKey }) => {
  const params = queryKey[1];
  if (!params) return [];
  const res = await fetch(
    `https://trefle.io/api/v1/plants?token=nPhiI1owDYQTM_cM-GzkSeO-w7_zFtZ3dRGKPwPVQ0o&filter%5Bgenus_name%5D=${params.genus}&filter%5Bflower_color%5D=${params.flowerColor}&filter_not%5Bcommon_name%5D=null`
  );
  if (!res.ok) throw new Error("fetch invalid");
  return res.json();
};

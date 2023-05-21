export const fetchGenusList = async ({ queryKey }) => {
  const id = (queryKey[1]);
  if (!id.length) return [];
  
  const res = await fetch(
    `https://trefle.io/api/v1/genus?token=nPhiI1owDYQTM_cM-GzkSeO-w7_zFtZ3dRGKPwPVQ0o&filter%5Bfamily_id%5D=${id}`,{
      method: 'GET',
      mode: 'cors',
    }
  );
  if (!res.ok) throw new Error("fetch invalid");
  return res.json();
};

import axios from 'axios'

export const getPlacesData = async (type,sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '2832b99a05msh73ced4e5f1d5073p11282bjsn0664e230033e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

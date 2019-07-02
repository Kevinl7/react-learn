import jsonp from 'jsonp'
export const getWeath = (city, callback) => {
  let url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGTO9s8UBWr2`
  jsonp(url, {}, function (error, res) {
    console.log(res);
    
  })
}
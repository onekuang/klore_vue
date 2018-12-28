import Vue from 'vue';

Vue.filter('time', function(input) {
  var d       = new Date(input)
    var year    = d.getFullYear()
    var month   = d.getMonth()    + 1
    var day     = d.getDate()     < 10 ? '0' + d.getDate()    : '' + d.getDate()
    var hour    = d.getHours()    < 10 ? '0' + d.getHours()   : '' + d.getHours()
    var minutes = d.getMinutes()  < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
    var seconds = d.getSeconds()  < 10 ? '0' + d.getSeconds() : '' + d.getSeconds()

    return year + '-' 
      + month   + '-' 
      + day     + ' ' 
      + hour    + ':' 
      + minutes + ':' 
      + seconds;
})

Vue.filter('hide_mobile', function(val) {
  var str = val.toString();
  var str1 = str.slice(0,3)
  var str2 = str.slice(-4)
  return `${str1} **** ${str2}`
})

Vue.filter('hide_name', function(val) {
  var str = val.toString();
  var str = str.slice(-1)
  return `**${str}`
})
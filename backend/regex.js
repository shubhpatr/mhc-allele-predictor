var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

let main_out = '';
let i = 0;
while(i<47){
console.log('Writing for file  ',i)
var words = require(`./matrices/${i}.txt`);
var thrs = require(`./threshold/${i}.txt`);
var con = require(`./finalconstant/${i}.txt`);

var x = thrs.replace(/(\d|$)(\s)/g,"$1,");
var x = x.replace(/\s/g,"");
var n = words.replace(/\s/g," ");//Remove all whitespaces in between and add an single space
var n = n.replace(/([A-Z]*|$)(:|$)/g,'"$1"$2');//Insertquotes between all alphabets
var n = n.replace(/(\d\s|$)/g,'$1,');//Insert comma after each number
var n = n.replace(/([,]|$)( "|$)/g,'], $2');//Add closing square brackets for each list
var n = n.replace(/([:]|$)/g,'$1[');//Add opening square brackets
var n = n.substring(0, n.length - 9)//Remove junk from the end
var x = `\nx${i} = [` + x + "]\n"
var y = `y${i} = ` + con.replace(/\s/g,"");
var out =  x + y + `\nz${i} = {` + n + " ]}\n";//Insert curly brackets and name
main_out += out;
i += 1
}


fs.appendFile('data.py', main_out,function (err) {
  if (err) throw err;
  console.log('Saved!');
});
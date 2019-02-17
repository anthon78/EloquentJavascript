/*{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}*/

/*The ranges property contains an array of Unicode character ranges, 
each of which is a two-element array containing a lower bound and an upper bound. 
Any character codes within these ranges are assigned to the script. 
The lower bound is inclusive (code 994 is a Coptic character), 
and the upper bound is non-inclusive (code 1008 isn’t).*/


// given a character code, find the corresponding script object
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }


// given a collection and a function, return an array of group name objects 
// each of which names a group and tells you the # of elements found in that group
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }



function dominantDirection(text) {
    
    // convert text to array of code points
    codePointList = [];
    for (let char of text) {
        if (char != " "){
            codePointList.push(
                characterScript(
                    char.codePointAt(0)));
        }
    }
    
    //get a list of {name:n count:c} objects and reduce to find
    // the object with the highest count value
    codePointList = codePointList.filter(n => n!= null);
    let mostFrequent = countBy(codePointList, n => n.direction)
        .reduce((n1, n2)=> n1.count > n2.count ? n1 : n2);

    
    return mostFrequent.name;

}
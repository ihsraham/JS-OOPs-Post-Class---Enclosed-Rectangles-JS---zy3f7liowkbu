//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1, rec2) {
  //write your code
  let rec = {};
  rec.top = Math.min(rec1.top, rec2.top);
  rec.left = Math.min(rec1.left, rec2.left);
  rec.height = Math.max(rec1.height, rec2.height);
  rec.width = Math.max(rec1.width, rec2.width);
  rec.children = [];
  let childObj = {};
  childObj.top = Math.max(rec1.top, rec2.top) - Math.min(rec1.top, rec2.top);
  childObj.left =
    Math.max(rec1.left, rec2.left) - Math.min(rec1.left, rec2.left);
  childObj.height = Math.min(rec1.height, rec2.height);
  childObj.width = Math.min(rec1.width, rec2.width);
  rec.children.push(childObj);
  return rec;
}

module.exports = updateStructure;

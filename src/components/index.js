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
  rec.top =
    String(Math.min(parseInt(rec1.top, 10), parseInt(rec2.top, 10))) + "px";
  rec.left =
    String(Math.min(parseInt(rec1.left, 10), parseInt(rec2.left, 10))) + "px";
  rec.height =
    String(Math.max(parseInt(rec1.height, 10), parseInt(rec2.height, 10))) +
    "px";
  rec.width =
    String(Math.max(parseInt(rec1.width, 10), parseInt(rec2.width, 10))) + "px";
  rec.children = [];
  let childObj = {};
  childObj.top =
    String(
      Math.max(parseInt(rec1.top, 10), parseInt(rec2.top, 10)) -
        Math.min(parseInt(rec1.top, 10), parseInt(rec2.top, 10))
    ) + "px";
  childObj.left =
    String(
      Math.max(parseInt(rec1.left, 10), parseInt(rec2.left, 10)) -
        Math.min(parseInt(rec1.left, 10), parseInt(rec2.left, 10))
    ) + "px";
  childObj.height =
    String(Math.min(parseInt(rec1.height, 10), parseInt(rec2.height, 10))) +
    "px";
  childObj.width =
    String(Math.min(parseInt(rec1.width, 10), parseInt(rec2.width, 10))) + "px";
  rec.children.push(childObj);
  return rec;
}

module.exports = updateStructure;

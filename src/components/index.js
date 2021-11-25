//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1, rec2) {
  //write your code
  var rec = {};
  let top1 = parseInt(rec1.top, 10);
  let top2 = parseInt(rec2.top, 10);
  let left1 = parseInt(rec1.left, 10);
  let left2 = parseInt(rec2.left, 10);
  let height1 = parseInt(rec1.height, 10);
  let height2 = parseInt(rec2.height, 10);
  let width1 = parseInt(rec1.width, 10);
  let width2 = parseInt(rec2.width, 10);

  if (
    top1 <= top2 &&
    left1 <= left2 &&
    height1 >= height2 &&
    width1 >= width2
  ) {
    rec.top = top1 + "px";
    rec.left = left1 + "px";
    rec.height = height1 + "px";
    rec.width = width1 + "px";
    let children = [];
    let objChild = {};
    objChild.top = top2 - top1 + "px";
    objChild.left = left2 - left1 + "px";
    objChild.width = width2 + "px";
    objChild.height = height2 + "px";
    objChild.children = [];
    children.push(objChild);
    rec.children = children;
  } else if (
    top2 <= top1 &&
    left2 <= left1 &&
    height2 >= height1 &&
    width2 >= width1
  ) {
    rec.top = top2 + "px";
    rec.left = left2 + "px";
    rec.height = height2 + "px";
    rec.width = width2 + "px";
    let children = [];
    let objChild = {};
    objChild.top = top1 - top2 + "px";
    objChild.left = left1 - left2 + "px";
    objChild.width = width1 + "px";
    objChild.height = height1 + "px";
    objChild.children = [];
    children.push(objChild);
    rec.children = children;
  } else {
    rec = rec1;
  }
  return rec;
}

module.exports = updateStructure;

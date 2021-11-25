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
    rec.top = top1;
    rec.left = left1;
    rec.height = height1;
    rec.width = width1;
    let children = [];
    let objChild = {};
    objChild.top = top2 - top1;
    objChild.left = left2 - left1;
    objChild.width = width2;
    objChild.height = height2;
    objChild.children = [];
    children.push(objChild);
    rec.children = children;
  } else if (
    top2 <= top1 &&
    left2 <= left1 &&
    height2 >= height1 &&
    width2 >= width1
  ) {
    rec.top = top2;
    rec.left = left2;
    rec.height = height2;
    rec.width = width2;
    let children = [];
    let objChild = {};
    objChild.top = top1 - top2;
    objChild.left = left1 - left2;
    objChild.width = width1;
    objChild.height = height1;
    objChild.children = [];
    children.push(objChild);
    rec.children = children;
  } else {
    rec = rec1;
  }
  return rec;
}

module.exports = updateStructure;

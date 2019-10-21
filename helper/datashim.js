const data = {
  "users": [{
    "user":"admin",
    "pass": "password",
    "id": 1571682634946
  },{
    "user":"admin1",
    "pass": "password2",
    "id": 1571682634947
  }]
}

function findAll() {
  return data;
}

function findItem(id) {
  for(let item of data.users){
    if (item.id == id) return item;
  }
  return false;
}

const findID=function(users,id) {
  return data.users.indexOf(findItem(id))
}

function deleteItem(id) {
  let item = findItem(id)
  if (false != item)
  {
    let index = findID(data.users,id);
    data.users.splice(index,1);
    return item;
  }

  return false;
}

function saveItem(user) {
  let id = Math.floor(Date.now());
  user['id'] = id;
  data.users.push(user);
  console.log(data.users)
  return id;
}

function updateItem(user,id) {
  let index = findID(data.users,id);

  if (false != index) {
    user.id = parseInt(id,10);
    data.users[index]=user;
    return id;
  }

  return false;
}

exports.findAll = findAll;
exports.findItem = findItem;
exports.deleteItem = deleteItem;
exports.saveItem = saveItem;
exports.updateItem = updateItem;
